export class Field {
  constructor (name, props={}) {
    this.name = name
    this.id = `id_${name}`
    this.type = props.type || 'text'
    this.errors = props.errors || []
    this.value = props.value || ''
    this.required = props.required || true
  }

  set error (error) {
    this.errors.push(error)
  }
}
