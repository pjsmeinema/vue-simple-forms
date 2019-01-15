export class Field {
  constructor (name, { required = true, initial = '' } = {}) {
    this.name = name
    this.id = `id_${name}`
    this.value = ''
    this.errors = []
    this.required = required
    this.initial = initial

    for (const key in arguments[1]) {
      if (arguments[1].hasOwnProperty(key)) this[key] = arguments[1][key]
    }
  }

  set error (error) {
    this.errors.push(error)
  }

  reset () {
    this.value = ''
    this.error = []
  }

  init () {
    this.value = this.initial || this.value
  }
}

export class TextField extends Field {
  constructor (name, props) {
    super(name, props)
    this.type = 'text'
  }
}

export class PasswordField extends Field {
  constructor (name, props) {
    super(name, props)
    this.type = 'password'
  }
}

export class EmailField extends Field {
  constructor (name, props) {
    super(name, props)
    this.type = 'email'
  }
}

export class NumberField extends Field {
  constructor (name, props) {
    super(name, props)
    this.type = 'number'
  }
}
