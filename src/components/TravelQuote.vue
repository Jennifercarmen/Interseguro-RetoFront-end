<template>
  <v-container fluid>
   <form>
    <v-layout row wrap>
      <v-flex xs12 sm5 md5 order-md4 order-sm2>
        <SearchDestination/>
      </v-flex>
      <v-flex xs12 sm5 md5 order-md4 order-sm2>
        <NumberPassengers/>
      </v-flex>
    </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm5 md5 order-md4 >
      <DateTravel messageLabel="ida"/>
       </v-flex>
    <v-flex xs12 sm5 md5 order-md4>
      <DateTravel 
        messageLabel="Vuelta"/>
    </v-flex>
     </v-layout>
<v-layout row wrap>
        <v-flex xs12 sm10 md8 order-md4 order-sm2>
            <OperationQuote/>
         </v-flex>
     </v-layout>
  </form>
  </v-container>
</template>


<script>
import SearchDestination from './SearchDestination';
import NumberPassengers from './NumberPassengers';
import OperationQuote from './OperationQuote';
import DateTravel from "./DateTravel";

    export default{
        components:{
            SearchDestination,
            DateTravel,
            NumberPassengers,
            OperationQuote
        },
           
    }
</script>