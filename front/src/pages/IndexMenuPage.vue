<template>
  <q-page>
    <div class="row">
      <div class="col-2 col-md-1"></div>
      <div class="col-8 col-md-4">
        <div class="text-subtitle2 text-bold text-center">
          4ta JORNADA NACIONAL DE NEUROLOGIA
        </div>
        <div class="text-subtitle2 text-bold text-center">
          “EL PODER DE TUS BRAZOS ORURO”
        </div>
        <q-img src="356879877_584668113818175_8097994551976256420_n.jpg" />
      </div>
      <div class="col-2 col-md-1"></div>

      <div class="col-2 col-md-1"></div>
      <div class="col-8 col-md-4">
        <div class="text-subtitle2 text-bold text-center">
          2do SIMPOSIO INTERNACIONAL DE NEUROLOGIA
        </div>
        <div class="text-subtitle2 text-bold text-center">
          “ACTUALIZACIONES EN ENFERMEDADES NEUROLOGICAS”
        </div>
        <q-img src="363427687_603117188639934_2648311829907974764_n.jpg" />
      </div>
      <div class="col-2 col-md-1"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      slide: 'first'
    }
  }
})
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
