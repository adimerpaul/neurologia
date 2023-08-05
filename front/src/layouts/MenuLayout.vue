<template>
  <q-layout view="lHh Lpr lff">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          <div class="text-subtitle2" style="line-height: 1em">
            4ta Jornada Nacional de
            Neurología
            <br>
            2do Simposio Internacional de
            Neurología
          </div>
        </q-toolbar-title>

        <div>
          <q-btn label="Salir" color="red" to="/login" no-caps size="13px" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header class="q-pa-none">
<!--          <q-item dense>-->
<!--            <q-item-section avatar>-->
<!--              <q-img src="logo.png" width="35px"/>-->
<!--            </q-item-section>-->

<!--            <q-item-section>-->
<!--              <q-item-label>Jornadas</q-item-label>-->
<!--            </q-item-section>-->
<!--          </q-item>-->
          <q-item-section>
            <q-linear-progress stripe rounded size="20px" :value="value" color="primary" class="q-mt-sm">
              <div class="absolute-full flex flex-center">
                <q-badge color="white" size="10px" text-color="accent" :label="`${value*100}%`"/>
              </div>
            </q-linear-progress>
            <div>Prcetaje de videos visto</div>
          </q-item-section>
        </q-item-label>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>

          <q-item-section>
            <q-item-label>Title</q-item-label>
            <q-item-label caption>Caption</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterComponent></FooterComponent>
  </q-layout>

</template>

<script>
import FooterComponent from 'components/FooterComponent.vue'

export default {
  name: 'MainLayout',
  components: {
    FooterComponent
  },
  data () {
    return {
      value: 0.01,
      leftDrawerOpen: false
    }
  }
}
</script>
