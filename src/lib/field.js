export class Field {
  constructor (name, { type = 'text', required = true, initial = '', props = {}} = {}) {
    this.name = name
    this.id = `id_${name}`
    this.value = ''
    this.type = type
    this.required = required
    this.errors = []
    this.initial = initial
    this.props = props
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
