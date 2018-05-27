
<template>
  <div id="app">
    <v-app>
    <HeaderComponent/>
        <TravelQuote/>
    </v-app>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import TravelQuote from "./components/TravelQuote/TravelQuote";

export default {
  name: 'app',
   components: {
    HeaderComponent,
    TravelQuote
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
