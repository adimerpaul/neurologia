<template>
  <q-layout view="lHh Lpr fff">
      <div class="bg-primary text-right">
        <q-btn icon="o_menu" color="white" v-if="$q.screen.lt.md" flat @click="modalMenu= true"/>
        <q-toolbar class="" v-else>
          <q-space />
          <q-tabs shrink class="text-white">
            <q-tab name="Inicio" label="Inicio" to="/principal" no-caps/>
            <q-tab name="Programa general" label="Programa general" no-caps/>
            <q-tab name="Contactos" label="Contactos" no-caps/>
<!--            <q-tab name="ponentes" label="Ponentes" no-caps/>-->
            <q-tab name="ingresar" no-caps>
              <q-btn label="Ingresar" to="/login" color="white" text-color="black" no-caps size="14px" />
            </q-tab>
          </q-tabs>
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
      modalMenu: false
    }
  }
}
</script>
