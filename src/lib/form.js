import {
  TextField,
  NumberField,
  PasswordField,
  EmailField
} from './fields'

/** Class to create a form instance. */
export class Form {
  // Form configuration;
  config = {
    formErrorsKey: 'form_errors' // key of the form errors in the response (e.g. an axios call to an api;)
  }

  // Form errors;
  errors = []

  // Object of Field objects;
  fields = {}

  constructor (fields = [], config) {
    this.config = config !== undefined ? config : this.config

    this.setFields(fields)
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
    this.fields[name] = new EmailField(name)
  }

  set field (field) {
    this.fields[field.name] = field
  }

  set numberField (name) {
    this.fields[name] = new NumberField(name)
  }

  set passwordField (name) {
    this.fields[name] = new PasswordField(name)
  }

  set textField (name) {
    this.fields[name] = new TextField(name)
  }

  reset () {
    this.errors = []
    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        this.fields[key].value = ''
        this.fields[key].errors = []
      }
    }
    return this
  }

  resetErrors () {
    this.errors = []
    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) this.fields[key].errors = []
    }
  }

  setFields (fields) {
    fields.forEach(field => { this.field = field })
  }

  setErrors (fieldErrors, formErrors) {
    // Sets field and/or non-field errors;
    this.errors = formErrors !== undefined ? formErrors : []

    for (const key in this.fields) {
      if (this.fields.hasOwnProperty(key)) {
        this.fields[key].errors = (key in fieldErrors) ? fieldErrors[key] : []
      }
    }
  }

  setErrorsByResponse (response) {
    // Sets field and/or non-field errors by response.
    // The non-field errors (default key=non_field_errors) should are set on the form;
    if (response.status === 400) {
      this.setErrors(
        response.data,
        response.data[this.config.formErrorsKey]
      )
    } else {
      this.error = `status_${response.status}`
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
