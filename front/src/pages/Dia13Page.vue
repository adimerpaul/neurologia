<template>
  <q-page class="q-pa-md">
    <q-timeline color="secondary">
      <q-timeline-entry heading>
        {{ $filters.dateDmY(date) }}
        <q-btn flat round dense icon="o_refresh" @click="videosGet" :loading="loading" />
      </q-timeline-entry>
      <q-timeline-entry v-for="(video,i) in videos" :key="i.title"
        :subtitle="video.subtitle"
        :title="video.title"
        :avatar="video.avatar?video.avatar:undefined"
      >
        <div>
          <div v-html="video.content"></div>
          <div>
            <template v-if="video.button">
              <q-btn size="12px" outline label="Ingresa a la sala" color="blue" class="" no-caps
                     icon-right="o_videocam" type="a" href="https://us05web.zoom.us/j/87909555789?pwd=jnX91HcvJIIccojTMLCatjMV9ZpWAY.1"
                     target="_blank" v-if="video.urlZoom"
              />
              <q-btn size="12px" label="Ver video" color="red" class="q-ml-xs" no-caps
                     icon-right="fa-brands fa-youtube" type="a" href="https://www.youtube.com/watch?v=9Q4XZQZVq6c"
                     target="_blank" v-if="video.urlYoutube" @click="verVideo(video)"
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
    verVideo (video) {
      console.log(video)
    },
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
