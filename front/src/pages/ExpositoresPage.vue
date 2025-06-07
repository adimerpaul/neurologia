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
import { date as qDate } from 'quasar'

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
      const grupos = {}
      this.expositores.forEach(expo => {
        const fecha = expo.date === 't'
          ? 'Taller'
          : qDate.formatDate(expo.date, 'dddd DD [de] MMMM')

        if (!grupos[fecha]) grupos[fecha] = []
        grupos[fecha].push(expo)
      })
      return grupos
    }
  },
  mounted () {
    this.getExpositores()
  },
  methods: {
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
