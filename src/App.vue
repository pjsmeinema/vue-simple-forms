<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Vue Simple Forms</h1>
    <v-form />
  </div>
</template>

<script>
import Form from './components/samples/Form.vue'

export default {
  name: 'app',
  components: {
    'v-form': Form
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
