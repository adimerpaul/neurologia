<template>
  <q-page>
    <div class="row text-center">
      <div class="col-12">
        <p class="text-h6">4ta JORNADA NACIONAL DE NEUROLOGIA</p>
      </div>
      <div class="col-3"></div>
      <div class="col-6">
        <q-video
          width="930"
          :ratio="16/9"
          src="https://www.youtube.com/embed/mCTHo_f_DSU"
        />
      </div>
      <div class="col-3"></div>
      <div class="col-12">
        <p class="text-h6">2do SIMPOSIO INTERNACIONAL DE NEUROLOGIA</p>
      </div>
      <div class="col-3"></div>
      <div class="col-6">
        <q-video
          width="930"
          :ratio="16/9"
          src="https://www.youtube.com/embed/LbXivmRSW1c"
        />
      </div>
      <div class="col-3"></div>
<!--      <iframe width="930" height="523" src="https://www.youtube.com/embed/LbXivmRSW1c" title="simposio" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
<!--      <iframe src="https://www.youtube.com/embed/mCTHo_f_DSU" title="jornadas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
<!--      <div class="text-h1 text-center text-bold">Bienvenidos!!</div>-->
<!--      <div class="text-center">-->
<!--        <q-img src="images/porta2023.jpg" width="700px" />-->
<!--      </div>-->
    </div>
    <div class="row">
<!--      <div class="col-2 col-md-1"></div>-->
<!--      <div class="col-8 col-md-4">-->
<!--        <div class="text-subtitle2 text-bold text-center">-->
<!--          4ta JORNADA NACIONAL DE NEUROLOGIA-->
<!--        </div>-->
<!--        <div class="text-subtitle2 text-bold text-center">-->
<!--          “EL PODER DE TUS BRAZOS ORURO”-->
<!--        </div>-->
<!--        <q-img src="356879877_584668113818175_8097994551976256420_n.jpg" />-->
<!--      </div>-->
<!--      <div class="col-2 col-md-1"></div>-->

<!--      <div class="col-2 col-md-1"></div>-->
<!--      <div class="col-8 col-md-4">-->
<!--        <div class="text-subtitle2 text-bold text-center">-->
<!--          2do SIMPOSIO INTERNACIONAL DE NEUROLOGIA-->
<!--        </div>-->
<!--        <div class="text-subtitle2 text-bold text-center">-->
<!--          “ACTUALIZACIONES EN ENFERMEDADES NEUROLOGICAS”-->
<!--        </div>-->
<!--        <q-img src="363427687_603117188639934_2648311829907974764_n.jpg" />-->
<!--      </div>-->
<!--      <div class="col-2 col-md-1"></div>-->
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
