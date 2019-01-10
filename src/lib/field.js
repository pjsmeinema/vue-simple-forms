export class Field {
  constructor (name, props={}) {
    this.name = name
    this.id = `id_${name}`
    this.value = ''

    this.placeholder = props.placeholder || ''
    this.type = props.type || 'text'
    this.errors = props.errors || []
    this._initial = props.initial || null
    this.required = true
    if (props.required !== undefined)
      this.required = props.required
  }

  set error (error) {
    this.errors.push(error)
  }

  set initial (value) {
    this._initial = value
  }

  init () {
    this.value = this._initial || this.value
  }
}
