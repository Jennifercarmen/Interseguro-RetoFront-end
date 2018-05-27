<template>
  <v-container fluid>
   <form>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 order-md4 order-sm2>
        <searchDestination/>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md4 order-sm2>
                <v-text-field
                  v-model="title"
                  :rules="[rules.required]"
                  label="N° pasajeros"
                  counter
                  max="15"
                ></v-text-field>
              </v-flex>
    </v-layout>
 
      <v-layout row wrap>
        <v-flex xs12 sm5 md5 order-md4 >
      <DateTravel/>

       </v-flex>
    <v-flex xs12 sm5 md5 order-md4>
      <DateTravel/>

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
import DateTravel from "./DateTravel";

    export default{
        name: "prueba",
        components:{
            searchDestination,
            DateTravel
        },
            data () {
      return {
        title: '',
        rules: {
          required: (value) => !!value || 'Required.',
        }
      }
    }
    }
</script>