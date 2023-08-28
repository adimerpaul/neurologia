<template>
  <q-layout view="lHh Lpr fff">
      <div class="bg-primary text-right">
        <q-btn icon="o_menu" color="white" v-if="$q.screen.lt.md" flat @click="modalMenu= true"/>
        <q-toolbar class="" v-else>
          <q-space />
          <q-tabs shrink class="text-white">
            <q-tab name="principal" label="Principal" to="/principal" no-caps/>
            <q-tab name="quienesSomos" label="Quienes Somos" no-caps/>
            <q-tab name="objetivos" label="Objetivos" no-caps/>
            <q-tab name="ponentes" label="Ponentes" no-caps/>
            <q-tab name="ingresar" no-caps>
              <q-btn label="Ingresar" to="/login" color="white" text-color="black" no-caps size="14px" />
            </q-tab>
          </q-tabs>
<!--          <q-btn flat label="Principal" to="/principal" no-caps></q-btn>-->
<!--          <q-btn flat label="Quienes Somos" no-caps></q-btn>-->
<!--          <q-btn flat label="Objetivos" no-caps></q-btn>-->
<!--          <q-btn flat label="Ponentes" no-caps></q-btn>-->
<!--          <q-btn label="Ingresar" color="primary" to="/login" no-caps size="14px" />-->
        </q-toolbar>
      </div>
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
<!--          <div class="text-subtitle1 text-center"><q-btn label="Ingresar" color="primary" to="/login" no-caps size="14px" /></div>-->
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
