<template>
  <q-page>
    <q-carousel
      animated
      v-model="slide"
      arrows
      :height="$q.screen.lt.md ? '35vh' : '60vh'"
      navigation
      navigation-icon="radio_button_unchecked"
      autoplay
      infinite
    >
      <q-carousel-slide name="first" img-src="6I7N22TXFVHAVPUAFRWA35DWCI.avif">
        <div class="absolute-bottom custom-caption">
          <div class="text-subtitle1">
            4ta JORNADANACIONAL DE
            NEUROLOGIA “EL PODER DE TUS
            BRAZOS ORURO”
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="second" img-src="Bucle OWKIN-G.jpg.webp">
        <div class="absolute-bottom custom-caption">
<!--          <div class="text-h2">Second stop</div>-->
          <div class="text-subtitle1">“ACTUALIZACIONES EN
            ENFERMEDADES NEUROLOGICAS”
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="third" img-src="NOTICIA_OCT28_OP2-_FINUT-02-1024x536.webp">
        <div class="absolute-bottom custom-caption">
<!--          <div class="text-h2">Third stop</div>-->
          <div class="text-subtitle1">2do SIMPOSIO INTERNACIONAL DE
            NEUROLOGIA
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <q-img src="356879877_584668113818175_8097994551976256420_n.jpg" />
      </div>
      <div class="col-2"></div>
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
