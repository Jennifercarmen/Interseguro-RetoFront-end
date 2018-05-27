<template>
<v-container fluid>
  <h1 @hijo:change="escucharHijo">
</h1>
  <form>
    <v-layout row wrap>
      <v-flex xs12 sm5 md5 order-md4 order-sm2>
        <multiselect
          v-model="Travel.destination"
          id="ajax"
          label="name"
          track-by="code"
          placeholder="Ingrese destino"
          open-direction="bottom"
          :options="Destination"
          :multiple="true"
          :searchable="true"
          :loading="isLoading"
          :internal-search="false"
          :clear-on-select="false"
          :close-on-select="false"
          :options-limit="300"
          :limit="6"
          :max="1"
          :limit-text="limitText"
          :max-height="600"
          :show-no-results="false"
          :hide-selected="true"
          @search-change="asyncFind"
      >
      <template slot="clear" slot-scope="props">
          <div
              class="multiselect__clear"
              v-if="selectedDestination.length"
              @mousedown.prevent.stop="clearAll(props.search)"
              @Close="clearAll(props.search)"
          ></div>
              </template>
              <span slot="maxElements">Máximo de opciones seleccionadas. Primero elimine una opción seleccionada para seleccionar otra.</span>
              <span slot="noResult">No se encontraron elementos. Considera cambiar la consulta de búsqueda.</span>
              </multiselect>
              </v-flex>
              <v-flex xs12 sm5 md5 order-md4 order-sm2>
                  <v-text-field
                      v-model="Travel.passengers"
                      :rules="[rules.required]"
                      label="N° pasajeros"
                      max="15"
                  ></v-text-field>
              </v-flex>
              </v-layout>
              <v-layout row wrap>
                 <v-flex xs12 sm5 md5 order-md4>
                 <DateTravel messageLabel="ida"   />
                 </v-flex>
                 <v-flex xs12 sm5 md5 order-md4>
                   <DateTravel messageLabel="Vuelta" />
                   </v-flex>
                   </v-layout>
                   <v-layout row wrap>
                       <v-flex xs12 sm10 md8 order-md4 order-sm2>
                           <v-btn @click="addToAPI">Cotizar</v-btn>
                        </v-flex>
                    </v-layout>
   </form>
  </v-container>
</template>

<script>
import DateTravel from "./DateTravel";
import Multiselect from 'vue-multiselect';
import axios from 'axios';

import {
    getDestination,
    ajaxFindPlace
} from '../helpers/interseguroApi'

export default {
    data() {
        return {
            selectedDestination: [],
            Destination: [],
            isLoading: false,
            title: '',
            rules: {
                required: (value) => !!value || 'Required.',
            },
            Travel: {
                destination: '',
                going: '',
                return: '',
                passengers: ''
            }
        }
    },
    components: {
        Multiselect,
        DateTravel
    },
    methods: {
      escucharHijo () {
      console.log('Mensaje recibido de Hijo')
    },
        limitText(count) {
            return `and ${count} other Destination`
        },
        asyncFind(query) {
            this.isLoading = true
            ajaxFindPlace(query).then(response => {
                this.Destination = response
                this.isLoading = false
            })
        },
        clearAll() {
            this.selectedDestination = [];
        },
        addToAPI() {
          let newTravel = {
              destination: '',
              going: '',
              return: '',
              passengers: ''
          }
          console.log(newTravel);
          const proxy = 'https://cors-anywhere.herokuapp.com/';
          const url = 'https://testsoat.interseguro.com.pe/talentfestapi/cotizacion';
          axios.post(proxy + url, '', {
                params: {
                    destino: this.Travel.destination[0]['name'],
                    fecha_partida: '28/08/2019',
                    fecha_retorno: '28/07/2019',
                    cantidad_pasajeros: this.Travel.passengers
                }
            })
            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
          });
        }
    },
    props:[
      "date"
    ]
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
