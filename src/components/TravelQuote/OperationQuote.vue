<template>
        <v-btn @click="addToAPI">Cotizar</v-btn>
</template>
<script>
import axios from 'axios';
export default {
        
    methods:{
        addToAPI(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const url = 'https://testsoat.interseguro.com.pe/talentfestapi/cotizacion';
        axios.post( proxy + url,'', {
        params: {
                destino:'Bangkok-Tailandia(BGK)',
                fecha_partida:'12/07/2019',
                fecha_retorno:'28/07/2019',
                cantidad_pasajeros:'2'
        }
        }
         )
        .then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        }
    }
}
</script>

