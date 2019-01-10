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
  name: 'Input',
  props: {
    field: Object
  },
  created () {
    this.field.init()
  }
}
</script>

<style scoped>
  div.input {
    margin: 0;
  }
  input {
    padding: 5px;
    margin-bottom: 5px;
  }
  .error {
    font-size: 12px;
    color: rgb(255, 81, 76);
  }
  label span {
    color: green;
  }
</style>
