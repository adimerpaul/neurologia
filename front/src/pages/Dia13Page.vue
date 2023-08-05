<template>
  <q-page class="q-pa-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        {{ $filters.dateDmY(date) }}
        <q-btn flat round dense icon="o_refresh" @click="videosGet" :loading="loading" />
      </q-timeline-entry>
      <q-timeline-entry v-for="(item,i) in videos" :key="i.title"
        :subtitle="item.subtitle"
        :title="item.title"
        :avatar="item.avatar?item.avatar:undefined"
      >
        <div>
          <div v-html="item.content"></div>
          <div>
            <template v-if="item.button">
              <q-btn size="12px" outline label="Ingresa a la sala" color="blue" class="" no-caps
                     icon-right="o_videocam" type="a" href="https://us05web.zoom.us/j/87909555789?pwd=jnX91HcvJIIccojTMLCatjMV9ZpWAY.1"
                     target="_blank" v-if="item.urlZoom"
              />
              <q-btn size="12px" label="Ver video" color="red" class="q-ml-xs" no-caps
                     icon-right="fa-brands fa-youtube" type="a" href="https://www.youtube.com/watch?v=9Q4XZQZVq6c"
                     target="_blank" v-if="item.urlYoutube"
              />
            </template>
          </div>
        </div>
      </q-timeline-entry>
    </q-timeline>
  </q-page>
</template>
<script>
export default {
  name: 'Dia13Page',
  data () {
    return {
      videos: [],
      date: this.$route.params.date,
      loading: false
    }
  },
  created () {
    this.$watch('$route.params.date', (value) => {
      this.date = value
      this.videosGet()
    })
    this.videosGet()
  },
  methods: {
    videosGet () {
      this.videos = []
      this.loading = true
      this.$axios.get('videos', {
        params: { date: this.date }
      }).then(response => {
        this.videos = response.data
      }).catch(error => {
        this.$alert.error(error.response.data.message)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>
<style scoped lang="sass">

</style>
