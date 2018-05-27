<template>
<div>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4>
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        lazy
        full-width
        width="290px"
      >
        <v-text-field
          slot="activator"
          v-model="date"
          :label="messageLabel"
          prepend-icon="event"
          readonly
        ></v-text-field>
        <v-date-picker v-model="date" scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="modal = false"  >Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.dialog.save(date)" @click.prevent="emitirEventoHijo">OK</v-btn>
        </v-date-picker>
      </v-dialog>
    </v-flex>
    <v-spacer></v-spacer>
  </v-layout>
  </div>
</template>

<script>
  import Travel from './Travel';
  export default {

    data: () => ({
      date:null,
      menu: false,
      modal: false,
      menu2: false
    }),
    methods: {
    emitirEventoHijo() {
      this.$emit('hijo:change')
    }
    },
    props:[
        'messageLabel'
    ]
  }
</script>