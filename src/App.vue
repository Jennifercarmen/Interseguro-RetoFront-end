
<template>
  <div id="app">
    <v-app>
    <HeaderComponent/>
    <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm9 md8>
        <v-card >
          <v-toolbar class="quote">
            <v-btn icon>
              <v-icon color="pink">arrow_back</v-icon>
              <img class="maleta" src="./assets/maleta.png" alt="maleta">
              <p class="tit">Cotiza el seguro de tu próximo viaje</p>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="pink">more_vert</v-icon>
            </v-btn>
          </v-toolbar>
              <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition> 
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
       
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
   .toolbar__content{
        background-color:#f0f6facc;
    }
    .maleta{
      width: 20px;
    }
    .tit{
      font-size: 12px;
      position: absolute;
      margin-left: 160px;
      color: #008bd4;
      font-weight: bold;
    }
</style>
