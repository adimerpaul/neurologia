<template>
  <q-page class="bg-grey-3">
    <q-markup-table>
    </q-markup-table>
  </q-page>
</template>
<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      loading: false,
      registros: [],
      registro: {}
    }
  },
  mounted () {
    this.registroGet()
  },
  methods: {
    registroGet () {
      this.loading = true
      this.$axios.get('/registro')
        .then(response => {
          this.registros = response.data
          this.loading = false
        })
        .catch(error => {
          console.error('Error fetching registros:', error)
          this.loading = false
        })
    }
  }
}
</script>
