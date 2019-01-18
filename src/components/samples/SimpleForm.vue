<template>
  <div>
    <form method="post" @submit.prevent="submit">

      <!--Iterate of the form fields-->
      <input
          v-for="field in form.fields"
          :key="field.id"
          :type="field.type"
          :placeholder="field.placeholder"
      />

      <button type="submit">Submit</button>

      <!--Iterate over the form errors-->
      <div class="form-error" v-for="error in form.errors" :key="error">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import { Form, TextField, EmailField, PasswordField } from 'vue-simple-forms'

const form = new Form('Register Form', [
  new TextField('username', { placeholder: 'Username' }),
  new EmailField('email', { placeholder: 'Your email' }),
  new PasswordField('password1', { placeholder: 'Choose your password' }),
  new PasswordField('password2', { placeholder: 'Repeat your password' })
])

// Add different fields;
export default {
  name: 'FormExample',
  data () {
    return {
      form: form
    }
  },
  methods: {
    submit () {
      this.loginForm.resetErrors()

      // Get data and do whatever you want...
      console.log(this.form.data)
    }
  }
}
</script>
