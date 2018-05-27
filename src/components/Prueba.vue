<template>
    <div data-app>
    <h1>{{title}}</h1>
    <label  for="">Destino</label>
    <DestinationList
    />
    </div>
</template>

<script>
import {getDestination} from '../helpers/interseguroApi'
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
            getDestination().then(res=>{
                this.destinationList =res
                console.log(this.destinationList);
                this.place=res[0]
            })
        },
        methods:{
            changePlace(){
                
            },
            PlaceList(){
                return this.destinationList
            },
            targetList(){

            }
        }
    }
</script>
