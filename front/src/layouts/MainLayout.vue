<template>
  <q-layout view="lHh Lpr fff">
    <q-carousel
      :height="$q.screen.lt.md ? '35vh' : '70vh'"
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
            <q-btn label="Ingresa aquí" color="primary" class="q-mt-md" no-caps to="/login" />
          </div>
        </div>
      </q-carousel-slide>
      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white rounded-borders"
        >
          <div>
            <q-btn icon="o_menu" v-if="$q.screen.lt.md" flat @click="modalMenu= true"/>
            <q-toolbar class="" v-else>
              <q-btn flat label="Principal" to="/principal" no-caps></q-btn>
              <q-btn flat label="Quienes Somos" no-caps></q-btn>
              <q-btn flat label="Objetivos" no-caps></q-btn>
              <q-btn flat label="Ponentes" no-caps></q-btn>
              <q-btn label="Ingresar" color="primary" to="/login" no-caps size="14px" />
            </q-toolbar>
          </div>
        </q-carousel-control>
      </template>
    </q-carousel>

    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterComponent></FooterComponent>
    <q-dialog v-model="modalMenu" position="top">
      <q-card class="q-pa-md">
        <q-card-section class="q-pa-md">
          <div class="text-subtitle1 text-center">Principal</div>
          <div class="text-subtitle1 text-center">Quienes Somos</div>
          <div class="text-subtitle1 text-center">Objetivos</div>
          <div class="text-subtitle1 text-center">Ponentes</div>
          <div class="text-subtitle1 text-center"><q-btn label="Ingresar" color="primary" to="/login" no-caps size="14px" /></div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-layout>
</template>

<script>
import FooterComponent from 'components/FooterComponent.vue'

export default {
  name: 'MainLayout',
  components: { FooterComponent },
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
}
</script>
<style>
.background {
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  height: 100%;
}
.titulo{
  padding: 50px 80px;
  font-size: 50px;
  font-weight: 900;
}
.subtitulo{
  padding: 50px 80px;
  font-size: 30px;
  font-weight: 900;
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
}
</style>
