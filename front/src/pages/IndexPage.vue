<template>
  <q-page>
    <div class="bannerMenu">
      <div class="q-pa-md text-white text-h4 text-bold">
        <q-img src="images/quir blanco2.png" width="150px" />
        <span class="text-center textMenu">
<!--          4ta. JORNADA NACIONAL DE NEUROLOGÍA y 2DO. SIMPOSIO INTERNACIONAL-->
        </span>
      </div>
    </div>
    <q-carousel
      :height="$q.screen.lt.md ? '35vh' : '50vh'"
      swipeable
      animated
      v-model="slide"
      arrows
      navigation-icon="radio_button_unchecked"
      infinite
      autoplay
      dark
    >
      <q-carousel-slide v-for="(t, i) in textos" :name="i+1" :key="i" class="column no-wrap flex-center q-pa-none" :img-src="t.img">
        <div class="text-center full-width q-pa-lg background">
          <div class="text-left titulo">
            {{ t.titulo }}
          </div>
          <div class="subtitulo">
            {{ t.subtitulo }}
          </div>
          <br>
          {{ t.fecha }}
          <div>
            <!--            <q-btn label="Ingresa aquí" color="primary" class="q-mt-md" no-caps to="/login" />-->
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div>
      <div class="text-h1 text-center text-bold">Bienvenidos!!></div>
      <div class="text-center">
        <q-img src="images/porta2023.jpg" width="700px" />
      </div>
    </div>
    <div class="row">
<!--      <div class="col-2 col-md-1"></div>-->
<!--      <div class="col-8 col-md-4">-->
<!--        <div class="text-subtitle2 text-bold text-center">-->
<!--          4ta. JORNADA NACIONAL DE NEUROLOGÍA-->
<!--        </div>-->
<!--        <div class="text-subtitle2 text-bold text-center">-->
<!--          Actualización en Enfermedades Neurológicas <br>-->
<!--          Fechas: 13, 14, 15 de septiembre-->
<!--        </div>-->
<!--        <q-img src="356879877_584668113818175_8097994551976256420_n.jpg" />-->
<!--      </div>-->
<!--      <div class="col-2 col-md-1"></div>-->

<!--      <div class="col-2 col-md-1"></div>-->
<!--      <div class="col-8 col-md-4">-->
<!--        <div class="text-subtitle2 text-bold text-center">-->
<!--          2DO. SIMPOSIO INTERNACIONAL <br>-->
<!--        </div>-->
<!--        <div class="text-subtitle2 text-bold text-center">-->
<!--          Emergencias Neurológicas <br>-->
<!--          Fechas: 16 y 12 de septiembre-->
<!--        </div>-->
<!--        <q-img src="363427687_603117188639934_2648311829907974764_n.jpg" />-->
<!--      </div>-->
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
      modalMenu: false,
      slide: 1,
      textos: [
        {
          titulo: '4ta. JORNADA NACIONAL DE NEUROLOGÍA',
          subtitulo: 'Actualización en Enfermedades Neurológicas',
          fecha: 'Fechas: 13, 14, 15 de septiembre',
          img: 'WhatsApp Image 2023-08-05 at 15.53.45.jpeg'
        },
        {
          titulo: '2DO. SIMPOSIO INTERNACIONAL',
          subtitulo: 'Emergencias Neurológicas',
          fecha: 'Fechas: 16 y 12 de septiembre',
          img: 'WhatsApp Image 2023-08-05 at 15.53.45 (1).jpeg'
        }
      ]
    }
  }
})
</script>
<style>
.background {
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  width: 100%;
  height: 100%;
}
.titulo{
  padding: 10px;
  font-size: 50px;
  font-weight: 900;
}
.subtitulo{
  padding: 50px 80px;
  font-size: 30px;
  font-weight: 900;
}
.bannerMenu{
  background: url('images/WhatsApp Image 2023-08-28 at 06.49.19.jpeg') no-repeat center center;
  background-size: cover;
}
@media (max-width: 1024px) {
  .titulo{
    padding: 50px 0px 0px 0px;
    font-size: 25px;
    font-weight: 900;
  }
  .subtitulo{
    padding: 5px 10px;
    font-size: 15px;
    font-weight: 900;
  }
  .textMenu{
    font-size: 20px;
  }
}
</style>
