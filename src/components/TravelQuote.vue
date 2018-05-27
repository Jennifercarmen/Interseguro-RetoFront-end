<template>
  <v-container fluid>
   <form>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 order-md4 order-sm2>
        <searchDestination/>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md4 order-sm2>
        <v-text-field label="N° de pasajeros" required>
        </v-text-field>
      </v-flex>
    </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 order-md4 order-sm2>
    <v-text-field
      label="Fecha de ida"
      required
    >
    </v-text-field>
       </v-flex>
    <v-flex xs12 sm6 md3 order-md4 order-sm2>
    <v-text-field
      label="Fecha de retorno"
      required
    >
    </v-text-field>
           </v-flex>
     </v-layout>

    
    
<v-layout row wrap>
        <v-flex xs12 sm10 md8 order-md4 order-sm2>
    <v-btn>submit</v-btn>
         </v-flex>
     </v-layout>
  </form>
  </v-container>
</template>


<script>
import searchDestination from './searchDestination';
    export default{
        name: "prueba",
        components:{
            searchDestination
        }
    }
</script>