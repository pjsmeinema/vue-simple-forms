# vue-simple-forms

`vue-simple-forms` is a useful
library that makes it easy to handle 
the logic of forms in Vue.js.

## Install

#### NPM

```bash
$ npm install vue-simple-forms
```

#### GitHub (a simple Vue.js environment with examples)
The source code of this example can be found in src/lib/components/samples/Form.vue;

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

const form = new Form()

// Add different fields;
form.textField = 'username'
form.emailField = 'email'
form.passwordField = 'password1'
form.passwordField = 'password2'
```

Or add an array of Fields objects:
```javascript
import { Form, TextField, EmailField } from 'vue-simple-forms'

const form = new Form([
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

## Best practise
Best practice is to store all your forms into a separated file (e.g. forms.js) and import the forms.

```javascript
import { Form, TextField, PasswordField, EmailField } from 'vue-simple-forms'

class AbstractForm extends Form {
  // Set your default configuration;
  config = {
    formErrorsKey: 'non_field_errors'
  }
}

// Form class to be used in a view/component;
export class RegisterForm extends AbstractForm {
  fields = {
    'username': new TextField('username'),
    'email': new EmailField('email', { placeholder: 'Your email' }),
    'password1': new PasswordField('password1', { placeholder: 'Choose your password' }),
    'password2': new PasswordField('password2', { placeholder: 'Repeat your password' })
  }
}
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
import { RegisterForm } from 'forms' // See last (best practise) example;

// Add different fields;
export default {
  name: 'FormExample',
  data () {
    return {
      form: new RegisterForm()
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
