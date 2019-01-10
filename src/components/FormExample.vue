<template>
  <div>
    <div class="form">
      <div class="form--inner">
        <h2>{{ loginForm.name }}</h2>
        <form method="post" @submit.prevent="submitLogin">

          <v-input :field="loginForm.fields.username"/>
          <v-input :field="loginForm.fields.password"/>

          <button type="submit">Submit</button>

          <div class="form-error" v-for="error in loginForm.errors" :key="error">
            {{ error }}
          </div>
        </form>
      </div>
      <div class="form--inner">
        <h3>Data</h3>
        <table class="data-table">
          <tr>
            <td><strong>Name</strong></td>
            <td><strong>Value</strong></td>
            <td><strong>Errors</strong></td>
          </tr>
          <tr v-for="field in loginForm.fields" :key="field.name">
            <td>{{ field.name }}</td>
            <td>{{ field.value }}</td>
            <td>{{ field.errors }}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="form">
      <div class="form--inner">
        <h2>{{ registerForm.name }}</h2>
        <form method="post" @submit.prevent="submitRegister">
          <v-input :field="registerForm.fields.username"/>
          <v-input :field="registerForm.fields.firstName"/>
          <v-input :field="registerForm.fields.lastName"/>
          <v-input :field="registerForm.fields.address"/>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div class="form--inner">
        <h3>Data</h3>
        <table class="data-table">
          <tr>
            <td><strong>Name</strong></td>
            <td><strong>Value</strong></td>
            <td><strong>Errors</strong></td>
          </tr>
          <tr v-for="field in registerForm.fields" :key="field.name">
            <td>{{ field.name }}</td>
            <td>{{ field.value }}</td>
            <td>{{ field.errors }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
  import { Form } from '@/lib/base'
  import Input from '@/components/InputExample.vue'

  // Create fields manually;
  const loginForm = new Form('Login Form')
  loginForm.textField = 'username'
  loginForm.passwordField = 'password'

  // Create fields (text fields) automatically;
  const registerForm = new Form('Register Form', ['username', 'firstName', 'lastName', 'address'])

  export default {
    name: 'SimpleFormExample',
    components: {
      'v-input': Input
    },
    data () {
      return {
        loginForm: loginForm,
        registerForm: registerForm.reset()
      }
    },
    methods: {
      submitLogin() {
        this.loginForm.resetErrors()

        let exampleResponse = {
          status: 400,
          data: {
            username: ['Username already exists'],
            password: ['Password is a stupid choice', 'You dont belong to this society anymore']
          }
        }
        this.loginForm.setErrors(exampleResponse)
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

  table.data-table {
    width: 100%;
  }

  table.data-table td {
    border: 1px solid gray;
  }

  .form-error {
    font-size: 10px;
    color: red;
  }
</style>
