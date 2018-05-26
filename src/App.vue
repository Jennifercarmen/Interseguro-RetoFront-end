
<template>
  <div id="app">
    <HeaderComponent/>
    <TravelQuote/>
    <Prueba/>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import TravelQuote from "./components/TravelQuote";
import Prueba from "./components/Prueba";

export default {
  name: 'app',
   components: {
    HeaderComponent,
    TravelQuote,
    Prueba
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
