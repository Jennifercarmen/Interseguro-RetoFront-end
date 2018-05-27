
<template>
  <div id="app">
    <v-app>
    <HeaderComponent/>
        <Travel/>
    </v-app>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import Travel from "./components/Travel";

export default {
  name: 'app',
   components: {
    HeaderComponent,
    Travel
  },
  data () {
    return {
      msg: 'Interseguro'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
