<template>
  <v-container fluid>
   <form>
    <v-layout row wrap>
        <v-flex xs12 sm6 md3 order-md4 order-sm2>
    <v-text-field
      v-model="destino"
      :error-messages="nameErrors"
      label="Elije tu destino"
      required
      @input="$v.destino.$touch()"
      @blur="$v.destino.$touch()"
    >
    </v-text-field>
       </v-flex>
    <v-flex xs12 sm6 md3 order-md4 order-sm2>
    <v-text-field
      v-model="npasengers"
      :error-messages="npasengersErrors"
      label="N° de pasajeros"
      required
      @input="$v.npasengers.$touch()"
      @blur="$v.npasengers.$touch()"
    >
    </v-text-field>
           </v-flex>
     </v-layout>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 order-md4 order-sm2>
    <v-text-field
      v-model="ida"
      :error-messages="idaErrors"
      label="Fecha de ida"
      required
      @input="$v.ida.$touch()"
      @blur="$v.ida.$touch()"
    >
    </v-text-field>
       </v-flex>
    <v-flex xs12 sm6 md3 order-md4 order-sm2>
    <v-text-field
      v-model="retorno"
      :error-messages="retorno"
      label="Fecha de retorno"
      required
      @input="$v.retorno.$touch()"
      @blur="$v.retorno.$touch()"
    >
    </v-text-field>
           </v-flex>
     </v-layout>

    
    
<v-layout row wrap>
        <v-flex xs12 sm10 md8 order-md4 order-sm2>
    <v-btn @click="submit">submit</v-btn>
         </v-flex>
     </v-layout>
  </form>
  </v-container>
</template>