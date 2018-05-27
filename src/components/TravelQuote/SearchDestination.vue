<!-- Vue component -->
<template>
  <div>
  <multiselect v-model="selectedDestination" id="ajax" label="name" track-by="code" placeholder="Ingrese destino" open-direction="bottom" :options="Destination" :multiple="true" :searchable="true" :loading="isLoading" :internal-search="false" :clear-on-select="false" :close-on-select="false" :options-limit="300" :limit="6" :max="1" :limit-text="limitText" :max-height="600" :show-no-results="false" :hide-selected="true" @search-change="asyncFind">
    <template slot="clear" slot-scope="props">
      <div class="multiselect__clear" v-if="selectedDestination.length" @mousedown.prevent.stop="clearAll(props.search)" @Close="clearAll(props.search)"></div>
    </template>
    <span slot="maxElements">Máximo de opciones seleccionadas. Primero elimine una opción seleccionada para seleccionar otra.</span>
    <span slot="noResult">No se encontraron elementos. Considera cambiar la consulta de búsqueda.</span>
  </multiselect>
  </div>
</template>

<script>
 import Multiselect from 'vue-multiselect'
import { getDestination,ajaxFindCountry } from '../../helpers/interseguroApi'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      selectedDestination: [],
      Destination: [],
      isLoading: false
    }
  },
  methods: {
    limitText (count) {
      return `and ${count} other Destination`
    },
    asyncFind (query) {
      this.isLoading = true
      ajaxFindCountry(query).then(response => {
        this.Destination = response
        this.isLoading = false
      })
    },
    clearAll () {
      this.selectedDestination = []
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

