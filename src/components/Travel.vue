<template>
  <v-container fluid>
    <v-layout row wrap justify-center>
      <v-flex xs12 sm9 md8>
        <v-card >
          <v-toolbar class="quote">
            <v-btn icon>
              <v-icon color="pink">arrow_back</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="pink">more_vert</v-icon>
            </v-btn>
          </v-toolbar>
              <TravelQuote/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import TravelQuote from "./TravelQuote";

  export default {
    components:{
            TravelQuote
    }
  }
</script>

<style>
    .toolbar__content{
        background-color:#f0f6facc;
    }
</style>
