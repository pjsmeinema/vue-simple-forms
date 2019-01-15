<template>
  <div>
    <h3>Data</h3>
    <table class="data-table">
      <tr>
        <td><strong>Name</strong></td>
        <td><strong>Value</strong></td>
        <td><strong>Errors</strong></td>
      </tr>
      <tr v-for="field in form.fields" :key="field.name">
        <td>{{ field.name }}</td>
        <td>{{ field.value }}</td>
        <td>{{ field.errors }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { Form } from '@/lib/base'

export default {
  name: 'FormData',
  props: {
    form: {
      type: Form,
      required: true
    }
  }
}
</script>

<style scoped>
  table.data-table {
    width: 100%;
  }

  table.data-table td {
    border-bottom: 1px solid whitesmoke;
    border-top: 1px solid whitesmoke;
    padding: 5px;
  }
</style>
