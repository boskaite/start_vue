<template>
  <div id="app">
    <StartHello msg="Ekaterina made the first project with one page in the Vue!"/>
  </div>
</template>

<script>

import StartHello from './components/StartHello.vue'

export default {
  name: 'App',
  components: {
    StartHello
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgba(0, 128, 0, 0.59);
  margin-top: 60px;
}
</style>
