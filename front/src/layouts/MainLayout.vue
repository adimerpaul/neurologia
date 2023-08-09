<template>
  <q-layout view="lHh Lpr fff">
    <q-carousel
      :height="$q.screen.lt.md ? '35vh' : '70vh'"
      swipeable
      animated
      v-model="slide"
      thumbnails
      arrows
      navigation-icon="radio_button_unchecked"
      infinite
      autoplay
      dark
      control-color="primary"
    >
      <!--          <q-carousel-slide :name="1" img-src="WhatsApp Image 2023-08-05 at 15.53.45.jpeg">-->
      <!--            sdsds-->
      <!--          </q-carousel-slide>-->
      <q-carousel-slide :name="1" class="column no-wrap flex-center" img-src="WhatsApp Image 2023-08-05 at 15.53.45.jpeg">
<!--        <q-icon name="style" size="56px" />-->
        <div class="text-center full-width" style="background: rgba(0,0,0,.3); color: white; padding: 10px">
          <div :class="`${$q.screen.lt.md ? 'text-h6' : 'text-h3'} text-left`" style="width: 350px">4ta JORNADA NACIONAL DE NEUROLOGIA</div>
          “ACTUALIZACION EN ENFERMEDADES NEUROLOGICAS ORURO 2023”
          <div>
            <q-btn label="Ingresa aquí" color="primary" class="q-mt-md" no-caps to="/login" />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="2" class="column no-wrap flex-center" img-src="WhatsApp Image 2023-08-05 at 15.53.45 (1).jpeg" >
        <div class="text-center full-width" style="background: rgba(0,0,0,.3); color: white; padding: 10px">
          <div :class="`${$q.screen.lt.md ? 'text-h6' : 'text-h3'} text-left`" style="width: 350px">2do SIMPOSIO INTERNACIONAL DE NEUROLOGIA</div>
          “TEMA: ACTUALIZACION EN ENFERMEDADES NEUROLOGICAS”
          <div>
            <q-btn label="Ingresa aquí" color="primary" class="q-mt-md" no-caps to="/login" />
          </div>
        </div>
      </q-carousel-slide>
      <q-carousel-slide :name="3" class="column no-wrap flex-center" img-src="WhatsApp Image 2023-08-05 at 15.53.45 (2).jpeg" >
        <div class="text-center full-width" style="background: rgba(0,0,0,.3); color: white; padding: 10px">
          <div :class="`${$q.screen.lt.md ? 'text-h6' : 'text-h3'} text-left`" style="width: 350px">“EMERGENCIAS NEUROLOGICAS” </div>
          “FECHAS 13 - 14 - 15 - 16 y 17 DE SEPTIEMBRE DE 2023”
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
            <q-btn label="Ingresar" color="red" to="/login" no-caps size="14px" icon="o_person" dense />
          </div>
<!--          <q-toggle dense dark color="orange" v-model="autoplay" label="Auto Play" />-->
        </q-carousel-control>
      </template>
    </q-carousel>
<!--    <q-header elevated>-->
<!--      <div class="bg-teal-9">-->
<!--        <q-btn flat dense round size="10px" icon="fa-brands fa-facebook" color="white" />-->
<!--        <q-btn flat dense round size="10px" icon="fa-brands fa-youtube" color="white" />-->
<!--      </div>-->
<!--      <q-toolbar>-->
<!--&lt;!&ndash;        <q-btn&ndash;&gt;-->
<!--&lt;!&ndash;          flat&ndash;&gt;-->
<!--&lt;!&ndash;          dense&ndash;&gt;-->
<!--&lt;!&ndash;          round&ndash;&gt;-->
<!--&lt;!&ndash;          icon="menu"&ndash;&gt;-->
<!--&lt;!&ndash;          aria-label="Menu"&ndash;&gt;-->
<!--&lt;!&ndash;          @click="toggleLeftDrawer"&ndash;&gt;-->
<!--&lt;!&ndash;        />&ndash;&gt;-->

<!--        <q-toolbar-title>-->
<!--          <div class="text-subtitle2" style="line-height: 1em">-->
<!--            4ta Jornada Nacional de-->
<!--            Neurología-->
<!--            <br>-->
<!--            2do Simposio Internacional de-->
<!--            Neurología-->
<!--          </div>-->
<!--        </q-toolbar-title>-->

<!--        <div>-->
<!--          <q-btn label="Ingresar" color="red" to="/login" no-caps size="14px" icon="login" />-->
<!--        </div>-->
<!--      </q-toolbar>-->
<!--    </q-header>-->

<!--    <q-drawer-->
<!--      v-model="leftDrawerOpen"-->
<!--      show-if-above-->
<!--      bordered-->
<!--    >-->
<!--      <q-list>-->
<!--        <q-item-label-->
<!--          header-->
<!--        >-->
<!--          Essential Links-->
<!--        </q-item-label>-->

<!--        <EssentialLink-->
<!--          v-for="link in essentialLinks"-->
<!--          :key="link.title"-->
<!--          v-bind="link"-->
<!--        />-->
<!--      </q-list>-->
<!--    </q-drawer>-->

    <q-page-container>
      <router-view />
    </q-page-container>
    <FooterComponent></FooterComponent>
  </q-layout>
</template>

<script>
// import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
//
// const linksList = [
//   {
//     title: 'Docs',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

import FooterComponent from 'components/FooterComponent.vue'

export default {
  name: 'MainLayout',
  components: { FooterComponent },
  data () {
    return {
      slide: 1
      // leftDrawerOpen: ref(false),
      // essentialLinks: linksList
    }
  }
}
</script>
