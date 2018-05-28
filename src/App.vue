
<template>
  <div id="app">
    <v-app>
    <HeaderComponent/>
        <TravelQuote/>
            <router-link to="/Quotation">Login</router-link>
         <hr>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>    
    </v-app>
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent";
import TravelQuote from "./components/TravelQuote";

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
