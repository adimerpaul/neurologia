<template>
  <q-page>
    <div class="row">
      <div class="col-2 col-md-1"></div>
      <div class="col-8 col-md-4">
        <div class="text-subtitle2 text-bold text-center">
          4ta. JORNADA NACIONAL DE NEUROLOGÍA
        </div>
        <div class="text-subtitle2 text-bold text-center">
          Actualización en Enfermedades Neurológicas <br>
          Fechas: 13, 14, 15 de septiembre
        </div>
        <q-img src="356879877_584668113818175_8097994551976256420_n.jpg" />
      </div>
      <div class="col-2 col-md-1"></div>

      <div class="col-2 col-md-1"></div>
      <div class="col-8 col-md-4">
        <div class="text-subtitle2 text-bold text-center">
          2DO. SIMPOSIO INTERNACIONAL <br>
        </div>
        <div class="text-subtitle2 text-bold text-center">
          Emergencias Neurológicas <br>
          Fechas: 16 y 12 de septiembre
        </div>
        <q-img src="363427687_603117188639934_2648311829907974764_n.jpg" />
      </div>
      <div class="col-2 col-md-1"></div>
      <div class="col-12">
        <div class="text-subtitle2 text-bold text-center">
          Auspiciado por:
        </div>
      </div>
      <div class="col-2 flex flex-center">
        <q-img src="logos/bago.png" width="80px" />
      </div>
      <div class="col-2 flex flex-center">
        <q-img src="logos/breskot pharma.png" width="80px" />
      </div>
      <div class="col-2 flex flex-center">
        <q-img src="logos/ferrer.png" width="80px" />
      </div>
      <div class="col-2 flex flex-center">
        <q-img src="logos/IMG_20230805_161256.jpg" width="80px" />
      </div>
      <div class="col-2 flex flex-center">
        <q-img src="logos/megalabs.png" width="80px" />
      </div>
      <div class="col-2 flex flex-center">
        <q-img src="logos/saval.png" width="80px" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      slide: 1
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
