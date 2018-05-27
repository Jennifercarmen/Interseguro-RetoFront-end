<template>
    <select class="browser-default" :name="name" v-model="value">
        <option :value="destination" v-for="(destination,key) in list" 
        :key="key">
            {{destination}}
        </option>
    </select>
</template>
<script>
export default {
    name:"Destination-List",
    data(){
        return{
            value:{}
        }
    },
    /* Computed Properties-- watchers.
     https://vuejs.org/v2/guide/computed.html#Computed-vs-Watched-Property */
    watch:{
        initialValue(){

        },
        value(){

        }
    },

        props:['list','initialValue','name']
    }

</script>
