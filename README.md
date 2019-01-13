# vue-simple-forms

`vue-simple-forms` is a very useful library that makes it easy to handle the logic of forms in Vue.js.


## Install

#### NPM

```bash
$ npm install vue-simple-forms
```

#### GitHub (setup Vue.js environment with examples)

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

Or add Field objects manually to the Form:
```javascript
import { Field } from 'vue-simple-forms'

form.field = new Field('address', { required: false, initial: 'Adres 1' })
```

Or add an array of field names:
```javascript
import { Form } from 'vue-simple-forms'

const form = new Form('Contact Form', ['firstName', 'lastName', 'email'])
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
      <div v-for="error in form.errors" :key="error">
        {{ error }}
      </div>
    </form>
  </div>
</template>

<script>
import { Form, Field } from 'vue-simple-forms'

// Instantiate your form (recommended to store this into a separated js file);
const form = new Form('Register Form')

// Add different fields;
form.field = new Field('username', { placeholder: 'Choose a nickname' })
form.field = new Field('email', { type: 'email', placeholder: 'Enter your email' })
form.field = new Field('password1', { type: 'password', placeholder: 'Enter a password' })
form.field = new Field('password2', { type: 'password', placeholder: 'Repeat the password' })

export default {
  name: 'FormExample',
  data () {
    return {
      form: form
    }
  },
  methods: {
    submit () {
      // Get data and do whatever you want...
      console.log(this.form.data)
      
      // Or set an error if necessary...
      this.form.fields.email.error = 'Invalid email address'
      
      // Or let vue-simple-forms help you setting your errors, based on an Ajax/Axios call...
      this.form.setErrors(response)
    }
  }
}
</script>
```

If you have questions, suggestions or want to be a collaborator, please at `pjsmeinema [at] gmail [dot] com`.
