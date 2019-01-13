import { Field } from './field'

/** Class to create a form instance. */
export class Form {
  constructor (name, fields = []) {
    this.name = name
    this.errors = []
    this.fields = {}

    this.setTextFields(fields)
  }

  get data () {
    const data = {}
    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) data[key] = this.fields[key].value
    }
    return data
  }

  set error (error) {
    this.errors.push(error)
  }

  set emailField (name) {
    this.fields[name] = new Field(name, { type: 'email' })
  }

  set field (field) {
    this.fields[field.name] = field
  }

  set passwordField (name) {
    this.fields[name] = new Field(name, { type: 'password' })
  }

  set textField (name) {
    this.fields[name] = new Field(name)
  }

  reset () {
    this._errors = []
    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        this.fields[key].value = ''
        this.fields[key].errors = []
      }
    }
    return this
  }

  resetErrors () {
    this._errors = []
    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) this.fields[key].errors = []
    }
  }

  setTextFields (fields) {
    // Creates text fields based an array of names;
    fields.forEach(field => {
      this.textField = field
    })
  }

  setErrors (response) {
    if (response.status === 400) {
      for (const key in this.fields) {
        if (this.fields.hasOwnProperty(key)) {
          this.fields[key].errors = (key in response.data) ? response.data[key] : []
        }
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

    return Object.assign(data, extraData)
  }
}
