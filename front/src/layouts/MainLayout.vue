<template>
  <q-layout view="lHh Lpr fff">
    <q-header>
      <q-toolbar>
<!--        <q-btn-->
<!--          flat-->
<!--          dense-->
<!--          round-->
<!--          icon="menu"-->
<!--          aria-label="Menu"-->
<!--          @click="toggleLeftDrawer"-->
<!--        />-->

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
          <q-btn label="Entrar" color="red" to="/login" no-caps size="13px" />
        </div>
      </q-toolbar>
    </q-header>

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
    <q-footer>
      <div class="bg-grey-3">
        <div class="row q-pb-lg">
          <div class="col-6 flex flex-center">
            <q-btn type="a" target="_blank" href="https://www.facebook.com/MultiCinesPLAZA" flat dense
                   size="22px" color="primary" class="q-ma-md"
            >
              <div class="row items-center no-wrap">
                <q-icon left name="fa-brands fa-facebook" />
                <div class="text-left text-grey text-subtitle2 text-bold " style="line-height: 1.2;">
                  Facebook<br>/MultiCinesPLAZA
                </div>
              </div>
            </q-btn>
            <!--            <q-btn type="a" target="_blank" href="https://www.facebook.com/MultiCinesPLAZA" flat dense-->
            <!--                   size="22px" color="red-8" class="q-ma-md"-->
            <!--            >-->
            <!--              <div class="row items-center no-wrap">-->
            <!--                <q-icon left name="fa-brands fa-instagram" />-->
            <!--                <div class="text-left text-grey text-subtitle2 text-bold " style="line-height: 1.2;">-->
            <!--                  Instagram<br>/MultiCinesPLAZA-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </q-btn>-->
          </div>
          <div class="col-6"></div>
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-md-1"></div>
              <div class="col-12 col-md-2 flex flex-center">
                <div class="text-red-6 text-bold text-h5">
                  <q-img src="/logoLargo.png" width="100px" class="cursor-pointer"
                         @click="$router.push('/')"
                  />
                </div>
              </div>
              <div class="col-6 col-md-2 q-pa-md">
                <div class=" text-grey text-bold">PROGRAMACIÓN</div>
                <q-separator />
                <div class="text-grey">Cartelera</div>
                <div class="text-grey">Próximos Estrenos</div>
                <div class="text-grey">Venta anticipada</div>
              </div>
              <div class="col-6 col-md-2 q-pa-md">
                <div class=" text-grey text-bold">SOBRE NOSOTROS</div>
                <q-separator />
                <div class="text-grey">Nosotros</div>
                <div class="text-grey">Salas y formatos</div>
                <div class="text-grey">Terminos y condiciones</div>
              </div>
              <div class="col-6 col-md-2 q-pa-md">
                <div class=" text-grey text-bold">PUBLICIDAD & MARKETING</div>
                <q-separator />
                <div class="text-grey">Eventos especiales</div>
                <div class="text-grey">Corporativo</div>
                <div class="text-grey">Publicidad</div>
              </div>
              <div class="col-6 col-md-2 q-pa-md">
                <div class=" text-grey text-bold">CONTACTOS</div>
                <q-separator />
                <div class="text-grey">Escribenos</div>
                <div class="text-grey">Trabaja con nosotros</div>
                <div class="text-grey">Celular: 099 999 9999</div>
              </div>
              <div class="col-12 col-md-1"></div>
            </div>
          </div>
        </div>
      </div>
    </q-footer>
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

export default {
  name: 'MainLayout',
  data () {
    return {
      // leftDrawerOpen: ref(false),
      // essentialLinks: linksList
    }
  }
}
</script>
