<template>
    <div data-app>
    <h1>{{title}}</h1>
    <label  for="">Destino</label>
    <DestinationList/>
  
    </div>
</template>

<script>
import {getDestination} from './../helpers/interseguroApi'
import DestinationList from './DestinationList';
    export default{
        name: "prueba",
        components:{
            DestinationList
        },
        data(){
            return {
                title:"Cotiza tu viaje",
                destinationList:[],
                place:''
            };
        },
        created(){
            getDestination('bang').then(res=>{
                console.log(res)
                this.destinationList =res
            })
        }
    }
</script>
