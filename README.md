# vue-simple-forms

`vue-simple-forms` is a very useful library that makes it easy to handle the logic of forms in Vue.js.


## Install

#### NPM

```bash
$ npm install vue-simple-forms
```

#### GitHub (setup a simple Vue.js environment with examples)

```bash
$ git clone https://github.com/pjsmeinema/vue-simple-forms
$ cd vue-simple-forms
$ npm install
$ npm run serve
```

## Basic Usage
Create your own Form object and use it in a component that contains a form.
```javascript
import { Form } from 'vue-simple-forms'

const form = new Form('Register Form')

// Add different fields;
form.textField = 'username'
form.emailField = 'email'
form.passwordField = 'password1'
form.passwordField = 'password2'
```

Or add an array of Fields objects:
```javascript
import { Form, TextField, EmailField } from 'vue-simple-forms'

const form = new Form('Contact Form', [
  new TextField('first_name', { maxlength: 100 }),
  new TextField('last_name', { maxlength: 100 }),
  new EmailField('first_name'),
  new TextField('message', { maxlength: 1000 })
])
```


Or add Field objects manually to the Form:
```javascript
import { TextField } from 'vue-simple-forms'

form.field = new TextField('address', { required: false, initial: 'Adres 1' })
```


## Integration with Vue.js
Below you see an example of how you can use `vue-simple-forms` in your Vue.js project:

```vue
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

      // Get data and do whatever you want.
      console.log(this.form.data)
    }
  }
}
</script>
```

If you have questions, suggestions or want to be a collaborator, please contact me at `pjsmeinema [at] gmail [dot] com`.
