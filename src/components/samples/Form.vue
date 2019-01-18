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
const loginForm = new Form('Login Form')
loginForm.textField = 'username'
loginForm.emailField = 'email'
loginForm.passwordField = 'password'
loginForm.numberField = 'justanumber'

// Add fields while instantiating the form;
const registerForm = new Form('Register Form', [
  new TextField('username'),
  new TextField('firstName', { required: false }),
  new TextField('lastName', { required: false })
])

// Add instantiated field objects;
registerForm.field = new TextField('address', { required: false, initial: 'Adres 1', yourPreferred: 'argument' })

export default {
  name: 'FormExample',
  components: {
    'v-input': Input,
    'v-form-data': FormData
  },
  data () {
    return {
      loginForm: loginForm,
      registerForm: registerForm.reset()
    }
  },

  methods: {
    submitLogin () {
      this.loginForm.resetErrors()

      const exampleResponse = {
        status: 400,
        data: {
          username: ['Username already exists'],
          password: ['Password is a bad choice']
        }
      }
      this.loginForm.setErrors(exampleResponse)
    },
    submitRegister () {
      const form = this.registerForm
      const formData = this.registerForm.data
      const formSelectedData = this.registerForm.getData(
        ['firstName', 'lastName']
      )

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
