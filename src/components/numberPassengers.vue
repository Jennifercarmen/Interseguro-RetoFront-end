<template>
     <v-text-field
                  v-model="title"
                  :rules="[rules.required]"
                  label="N° pasajeros"
                  max="15"
                ></v-text-field>
</template>
<script>
export default {
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
