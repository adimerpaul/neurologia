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
          <q-btn icon="account_circle" flat round color="white">
            <q-menu>
              <q-list>
                <q-item clickable v-ripple>
                  <q-item-section avatar>
                    <q-avatar>
                      <q-icon name="account_circle" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Bienvenido</q-item-label>
                    <q-item-section side>
                      <q-item-label caption>{{$store.user.name}}</q-item-label>
                    </q-item-section>
                  </q-item-section>
                </q-item>
                <q-item clickable v-ripple @click="logout">
                  <q-item-section avatar>
                    <q-avatar>
                      <q-icon name="logout" />
                    </q-avatar>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>Salir</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-layout>
        <q-header class="bg-white">
          <q-list class="text-black" separator bordered>
            <q-item-label header class="q-pa-none">
              <q-item dense>
                <q-item-section>
                  <q-item-label>
                    <q-linear-progress stripe rounded size="20px" :value="value" color="primary" class="q-mt-sm">
                      <div class="absolute-full flex flex-center">
                        <q-badge color="white" size="10px" text-color="accent" :label="`${value*100}%`"/>
                      </div>
                    </q-linear-progress>
                    <div class="text-center">
                      Porcentaje de avance
                      <q-icon name="help" class="q-ml-sm">
                        <q-tooltip>
                          <div class="text-center">
                            <div class="text-h6">Porcentaje de avance</div>
                            <div class="text-subtitle2">Muestra el porcentaje de avance de los videos vistos una vez finalizado el evento.</div>
                          </div>
                        </q-tooltip>
                      </q-icon>
                    </div>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-item-label>
            <q-item clickable to="/menu" exact active-class="bg-primary text-white text-bold">
              <q-item-section avatar>
                <q-icon name="o_home" />
              </q-item-section>
              <q-item-section >
                <q-item-label>Inicio</q-item-label>
                <q-item-label caption :class="path=='/menu'?'text-white':'text-black'">Bienvenido {{$store.user.name}}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item-label header>
              4ta Jornada Nacional de Neurología
            </q-item-label>
            <q-separator></q-separator>
            <q-item clickable to="dia13" exact active-class="bg-primary text-white text-bold">
              <q-item-section avatar>
                <q-icon name="event_available" />
              </q-item-section>
              <q-item-section>
                Miercoles 13-Sep-2023
              </q-item-section>
            </q-item>
            <q-item clickable to="dia14" exact active-class="bg-primary text-white text-bold">
              <q-item-section avatar>
                <q-icon name="event_available" />
              </q-item-section>
              <q-item-section>
                Jueves 14-Sep-2023
              </q-item-section>
            </q-item>
            <q-item clickable to="dia15" exact active-class="bg-primary text-white text-bold">
              <q-item-section avatar>
                <q-icon name="event_available" />
              </q-item-section>
              <q-item-section>
                Viernes 15-Sep-2023
              </q-item-section>
            </q-item>
            <q-item-label header>
              2da Simposio Internacional de Neurología
            </q-item-label>
            <q-item clickable to="dia16" exact active-class="bg-primary text-white text-bold">
              <q-item-section avatar>
                <q-icon name="event_available" />
              </q-item-section>
              <q-item-section>
                Viernes 16-Sep-2023
              </q-item-section>
            </q-item>
            <q-item clickable to="dia17" exact active-class="bg-primary text-white text-bold">
              <q-item-section avatar>
                <q-icon name="event_available" />
              </q-item-section>
              <q-item-section>
                Sabado 17-Sep-2023
              </q-item-section>
            </q-item>
          </q-list>
        </q-header>
        <q-footer class="bg-white">
          <q-list bordered padding dense class="rounded-borders text-red">
            <q-item clickable v-ripple @click="logout()">
              <q-item-section avatar>
                <q-icon name="o_logout" />
              </q-item-section>
              <q-item-section> Cerrar sesión</q-item-section>
            </q-item>
          </q-list>
        </q-footer>
      </q-layout>
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
      value: 0.05,
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$q.dialog({
        message: '¿Quieres cerrar sesión?',
        title: 'Salir',
        ok: {
          push: true
        },
        cancel: {
          push: true,
          color: 'negative'
        }
      }).onOk(() => {
        this.$q.loading.show()
        this.$axios.post('logout').then(() => {
          this.$axios.defaults.headers.common.Authorization = ''
          this.$store.user = {}
          localStorage.removeItem('tokenNeuro')
          this.$store.isLoggedIn = false
          this.$q.loading.hide()
          this.$router.push('/login')
        })
      })
    }
  },
  computed: {
    path () {
      return this.$route.path
    }
  }
}
</script>
