<template>
  <div class="input">
    <label :for="field.id">
      {{ field.name }}<span v-if="field.required">*</span>
    </label>
    <br />
    <input
        :name="field.name"
        v-model="field.value"
        :type="field.type"
        :id="field.id"
    />

    <div v-for="error in field.errors" :key="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InputExample',
    props: {
      field: Object
    },
    data () {
      return {
        value: ''
      }
    }
  }
</script>

<style scoped>
  div.input {
    margin: 0;
  }
  .error {
    font-size: 10px;
    color: red;
  }
</style>
