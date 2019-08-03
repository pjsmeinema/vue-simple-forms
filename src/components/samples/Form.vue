<template>
  <div>
    <div class="form">
      <!--FORM 1-->
      <div class="form--inner">
        <h2>{{ loginForm.name }}</h2>
        <form method="post" @submit.prevent="submitLogin">
          <v-input v-for="field in loginForm.fields" :key="field.name" :field="field" />

          <button type="submit">Submit</button>

          <div class="form-error" v-for="error in loginForm.errors" :key="error">
            {{ error }}
          </div>
        </form>
      </div>
      <div class="form--inner">
        <v-form-data :form="loginForm" />
      </div>
    </div>

    <!--FORM 2-->
    <div class="form">
      <div class="form--inner">
        <h2>{{ registerForm.name }}</h2>
        <form method="post" @submit.prevent="submitRegister">
          <v-input v-for="field in registerForm.fields" :key="field.name" :field="field" />

          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="form--inner">
        <v-form-data :form="registerForm" />
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from '@/lib/base'
import { TextField } from '@/lib/base'
import Input from '@/components/samples/Input.vue'
import FormData from '@/components/samples/FormData.vue'

// Add fields manually;
const loginForm = new Form()
loginForm.textField = 'username'
loginForm.emailField = 'email'
loginForm.passwordField = 'password'
loginForm.numberField = 'justanumber'

// Add fields while instantiating the form;
class RegisterForm extends Form {
  fields = {
    'username': new TextField('username'),
    'firstName': new TextField('firstName', { required: false }),
    'lastName': new TextField('lastName', { required: false })
  }
}

export default {
  name: 'FormExample',
  components: {
    'v-input': Input,
    'v-form-data': FormData
  },
  data () {
    const regForm = new RegisterForm()
    // Add instantiated field objects;
    regForm.field = new TextField('address', {
      required: false,
      initial: 'Adres 1',
      anyArgument: 'youLike' // Your own arguments are stored on the field: field.anyArgument;
    })

    return {
      loginForm: loginForm,
      registerForm: regForm
    }
  },

  methods: {
    submitLogin () {
      this.loginForm.resetErrors()

      const exampleResponse = {
        status: 400,
        data: {
          username: ['Username already exists'],
          password: ['Password is a bad choice'],
          non_field_errors: ['Unable to log in with provided credentials.']
        }
      }
      this.loginForm.setErrorsByResponse(exampleResponse)
    },
    submitRegister () {
      const form = this.registerForm
      const formData = form.data
      const formSelectedData = form.getData(
        ['firstName', 'lastName']
      )

      // Example of manually setting field errors;
      form.resetErrors()
      form.fields.address.error = 'Wrong address!'

      console.log('form', form)
      console.log('form.data', formData)
      console.log('form.getData', formSelectedData)
    }
  }
}
</script>

<style scoped>
  .form {
    display: flex;

    border: 2px solid whitesmoke;
    width: 50%;
    margin: 20px auto;
    padding: 20px;
  }

  .form div.form--inner {
    width: 50%;
  }

  .form-error {
    font-size: 10px;
    color: red;
  }
</style>
