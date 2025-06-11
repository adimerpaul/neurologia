<template>
  <q-page class="q-pa-md bg-grey-1">
    <div class="text-h5 text-primary text-center q-mb-md">
      Expositores por Día
    </div>

    <div v-for="(lista, fecha) in expositoresAgrupados" :key="fecha" class="q-mb-xl">
      <div class="text-h6 text-bold text-blue-10 q-mb-sm">
        {{ fecha }}
      </div>
      <q-card flat bordered class="q-pa-md bg-white">
        <q-item v-for="(expo, i) in lista" :key="i" class="q-mb-sm">
          <q-item-section avatar>
            <q-avatar size="56px" rounded>
              <img :src="expo.avatar || defaultAvatar" alt="avatar" />
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-subtitle1 text-weight-medium">{{ expo.title }}</q-item-label>
            <q-item-label caption class="text-grey-7">
              {{ expo.hora }} – {{ expo.text }}
            </q-item-label>
            <q-item-label v-if="expo.content" caption class="text-blue-8">
              {{ expo.content }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </q-page>
</template>

<script>
// import { date as qDate } from 'quasar'
// import moment from 'moment'

export default {
  name: 'ExpositoresPage',
  data () {
    return {
      expositores: [],
      defaultAvatar: 'https://www.w3schools.com/howto/img_avatar.png'
    }
  },
  computed: {
    expositoresAgrupados () {
      const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
      const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']

      const grupos = {}

      this.expositores.forEach(expo => {
        const clave = expo.date
        if (!grupos[clave]) grupos[clave] = []

        grupos[clave].push(expo)
      })

      const ordenado = Object.keys(grupos)
        .sort((a, b) => {
          if (a === 't') return 1 // Talleres siempre al final
          if (b === 't') return -1
          return new Date(a) - new Date(b)
        })
        .reduce((acc, clave) => {
          let titulo = 'Taller'
          if (clave !== 't') {
            const partes = clave.split('-') // YYYY-MM-DD
            const d = new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]))
            const diaSemana = dias[d.getDay()]
            const dia = d.getDate()
            const mes = meses[d.getMonth()]
            titulo = `${this.capitalize(diaSemana)} ${dia} de ${this.capitalize(mes)}`
          }
          acc[titulo] = grupos[clave]
          return acc
        }, {})

      return ordenado
    }
  },
  mounted () {
    this.getExpositores()
  },
  methods: {
    capitalize (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
    getExpositores () {
      this.$axios.get('expositores')
        .then(res => {
          this.expositores = res.data
        })
        .catch(err => {
          this.$alert.error(err.response?.data?.message || 'Error al cargar expositores')
        })
    }
  }
}
</script>
