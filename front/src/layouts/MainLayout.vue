<template>
  <q-layout view="lHh Lpr fff">
      <div class="bg-primary text-right">
        <q-btn icon="o_menu" color="white" v-if="$q.screen.lt.md" flat @click="modalMenu= true"/>
        <q-toolbar class="" v-else>
          <q-space />
          <q-tabs shrink class="text-white">
            <q-route-tab name="Inicio" label="Inicio" to="/" no-caps/>
            <q-route-tab name="Programa general" label="Programa general" to="/programa" no-caps/>
            <q-route-tab name="Contactos" label="Contactos" to="/contacto" no-caps/>
            <q-route-tab name="Mapa" label="Lugar Evento" to="/mapa" no-caps/>
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
          <div class="text-subtitle1 text-center">
            <q-item-label header class="text-h6">Menu</q-item-label>
          </div>
<!--          <div class="text-subtitle1 text-center">-->
            <q-btn label="Inicio" color="primary" to="/" no-caps size="14px" class="full-width" flat @click="modalMenu= false"/>
            <q-btn label="Programa general" color="primary" to="/programa" no-caps size="14px" class="full-width" flat @click="modalMenu= false"/>
            <q-btn label="Contactos" color="primary" to="/contacto" no-caps size="14px" class="full-width" flat @click="modalMenu= false"/>
            <q-btn label="Lugar Evento" color="primary" to="/mapa" no-caps size="14px" class="full-width" flat @click="modalMenu= false"/>
            <q-btn icon="login" label="Ingresar" to="/login" color="primary" no-caps size="14px" class="full-width" flat @click="modalMenu= false"/>
<!--          </div>-->
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
