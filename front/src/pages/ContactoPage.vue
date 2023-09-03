<template>
      <q-page class="fondo q-pa-lg">
        <div class="row">
          <div class="col-12">
            <q-card class="q-pa-md bg-grey-3">
              <q-card-section class="text-h2 fondo">
                <div class="text-center text-bold text-white">
                  CONTACTOS
                </div>
              </q-card-section>
              <q-card-section class="q-pa-none">
                <div class="row">
                  <div class="col-12 col-md-4"></div>
                  <div class="col-12 col-md-8">
                    <q-btn type="a" target="_blank" href="https://www.facebook.com/profile.php?id=100068249745954" flat dense
                           size="22px" color="primary" class="q-ma-md"
                    >
                      <div class="row items-center no-wrap">
                        <q-icon left name="fa-brands fa-facebook" />
                        <div class="text-left text-grey text-subtitle2 text-bold " style="line-height: 1.2;">
                          Facebook<br>4ta. Jornada <br>Nacional de Neurología
                        </div>
                      </div>
                    </q-btn>
                  </div>
                  <div class="col-12 col-md-4"></div>
                  <div class="col-12 col-md-8">
                    <q-btn type="a" target="_blank" href="https://www.facebook.com/profile.php?id=100068249745954" flat dense
                           size="22px" color="green-5" class="q-ma-md"
                    >
                      <div class="row items-center no-wrap">
                        <q-icon left name="fa-brands fa-whatsapp" />
                        <div class="text-left text-grey text-subtitle2 text-bold " style="line-height: 1.2;">
                          Cel: 7247581 <br>
                          Cel: 61823204 <br>
                          Cel: 60401730
                        </div>
                      </div>
                    </q-btn>
                  </div>
                  <div class="col-12 col-md-4"></div>
                  <div class="col-12 col-md-8">
                    <q-btn type="a" target="_blank" href="https://www.facebook.com/profile.php?id=100068249745954" flat dense
                           size="22px" color="primary" class="q-ma-md"
                    >
                      <div class="row items-center no-wrap">
                        <q-icon left name="o_public" />
                        <div class="text-left text-grey text-subtitle2 text-bold text-capitalize" style="line-height: 1.2;">
                          Pagina web: <br>
                          <a href="https://jornadasimposioneurooruro.org/">https://jornadasimposioneurooruro.org/</a>
                        </div>
                      </div>
                    </q-btn>
                  </div>
<!--                  <div class="col-6 col-md-3 flex flex-center">-->
<!--                    <q-btn type="a" target="_blank" href="https://www.facebook.com/profile.php?id=100068249745954" flat dense-->
<!--                           size="22px" color="primary" class="q-ma-md"-->
<!--                    >-->
<!--                      <div class="row items-center no-wrap">-->
<!--                        <q-icon left name="fa-brands fa-whatsapp" />-->
<!--                        <div class="text-left text-grey text-subtitle2 text-bold " style="line-height: 1.2;">-->
<!--                          Facebook<br>4ta. Jornada Nacional de Neurología-->
<!--                        </div>-->
<!--                      </div>-->
<!--                    </q-btn>-->
<!--                  </div>-->
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
</template>

<script>

export default {
  name: 'ContactoPage',
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
  background-image: url("images/portadaTono4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
