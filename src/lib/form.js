/** Class to create a form instance. */

import { Field } from './field'

export class Form {
  constructor (name, fields = []) {
    this.name = name
    this.errors = []
    this.fields = {}
    this.setFields(fields)
  }

  get data () {
    let data = {}
    for (let key in this.fields) {
      data[key] = this.fields[key].value
    }
    return data
  }

  set error (error) {
    this.errors.push(error)
  }

  set textField (name) {
    this.fields[name] = new Field(name)
  }

  set passwordField(name) {
    this.fields[name] = new Field(name, {type: 'password'})
  }

  reset () {
    this._errors = []
    for (let key in this.fields) {
      this.fields[key].value = ''
      this.fields[key].errors = []
    }
    return this
  }

  resetErrors () {
    this._errors = []
    for (let key in this.fields) {
      this.fields[key].errors = []
    }
  }

  setFields (fields) {
    // Creates text fields based an array of names;
    fields.forEach(field => {
      this.textField = field
    })
  }

  setErrors (response) {
    if (response.status === 400) {
      for (let key in this.fields) {
        this.fields[key].errors = (key in response.data) ? response.data[key] : []
      }
    } else {
      this.error = `${response.status}_error`
    }
  }

  getData (keys = null, extraData = {}) {
    let data = {}
    if (keys) {
      keys.forEach(key => {
        data[key] = this.fields[key].value
      })
    } else {
      data = this.data
    }

    return {
      ...data,
      ...extraData
    }
  }
}
