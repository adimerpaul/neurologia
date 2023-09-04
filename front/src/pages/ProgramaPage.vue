<template>
      <q-page class="fondo q-pa-lg">
        <div class="row">
          <div class="col-12">
            <q-card class="q-pa-md bg-grey-3">
              <q-card-section class="text-h2 fondo">
                <div class="text-center text-bold text-white">
                  PROGRAMA GENERAL
                </div>
              </q-card-section>
              <q-card-section class="q-pa-none">
<!--                <div class="row">-->
                  <q-card v-for="p in programas" :key="p.date" class="q-my-md">
                    <q-card-section>
                      <div class="text-h6 text-blue-10 text-bold text-center" style="text-decoration: underline;">
                        {{ $filters.dateDdM(p.date) }}
                      </div>
                      <div class="text-h6" v-for="video in p.videos" :key="video.id">
                        <span class="text-red">{{video.hora}}</span> | {{video.text}}-{{video.title}}
                      </div>
                    </q-card-section>
                  </q-card>
<!--                </div>-->
                <div class="text-h6">
<!--                  <pre>{{programas}}</pre>-->
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
</template>

<script>

export default {
  name: 'ProgramaPage',
  data () {
    return {
      programas: []
    }
  },
  mounted () {
    this.$axios.get('programa')
      .then(response => {
        this.programas = response.data
      })
      .catch(error => {
        this.$alert.error(error.response.data.message)
      })
  },
  methods: {
  }
}
</script>

<style scoped>
.fondo{
  background-image: url("/images/portadaTono4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
