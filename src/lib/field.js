export class Field {
  constructor (name, { type = 'text', required = true, initial = ''} = {}) {
    this.name = name
    this.id = `id_${name}`
    this.errors = []
    this.type = type
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
