<template>
      <q-page class="fondo q-pa-lg">
        <div class="row">
          <div class="col-12">
            <q-card class="q-pa-md bg-grey-3">
              <q-card-section class="text-h4 fondo">
                <div class="text-center text-bold text-white">
                  LUGAR DEL EVENTO
                </div>
              </q-card-section>
              <q-card-section class="q-pa-none">
                <div class="row">
                  <div class="col-12 col-md-6 flex flex-center">
                    <q-img src="images/DSC07843.JPG" width="550px"/>
                  </div>
                  <div class="col-12 col-md-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1897.7058908130055!2d-67.11181630890364!3d-17.9595691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b0a6a7abb3fd%3A0xb11cb3d7d9e97cfa!2sColegio%20Medico%20Oruro!5e0!3m2!1ses-419!2sbo!4v1693688370048!5m2!1ses-419!2sbo" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
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
  background-image: url("/images/portadaTono4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>
