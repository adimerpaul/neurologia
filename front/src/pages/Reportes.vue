<template>
  <q-page class="q-pa-md">
    <q-card flat bordered class="q-pa-md">
      <div class="text-h6 q-mb-md">Inscritos por Profesión</div>
      <apexchart type="bar" height="350" :options="chartOptions" :series="chartSeries"/>
      <!--      <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>-->
      <q-table
        :rows-per-page-options="[0]"
        :rows="registros"
        :columns="columns"
        row-key="profession"
        class="q-mt-lg"
        flat
        bordered
        dense
      />
    </q-card>
  </q-page>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'
import VueApexCharts from 'vue3-apexcharts'

export default {
  name: 'ReportesPage',
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      registros: [],
      chartSeries: [],
      chartOptions: {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Cantidad de Inscritos por Profesión',
          align: 'center'
        },
        colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#F46036', '#2B908F'],
        plotOptions: {
          bar: {
            distributed: true,
            horizontal: false,
            columnWidth: '60%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ['#304758']
          }
        },
        xaxis: {
          categories: [], // se llena con nombres reales
          labels: {
            rotate: -45,
            trim: false,
            style: {
              fontSize: '12px'
            }
          }
        }
        // legend: {
        //   show: false // ocultar leyenda con 1, 2, 3, 4
        // }
      },
      columns: [
        { name: 'profession', label: 'Profesión', field: 'profession', align: 'left' },
        { name: 'total', label: 'Cantidad', field: 'total', align: 'right' }
      ]
    }
  },
  mounted () {
    this.obtenerDatos()
  },
  methods: {
    async obtenerDatos () {
      try {
        const response = await this.$axios.get('/inscritos-por-profesion')
        this.registros = response.data

        this.chartSeries = [{
          data: response.data.map(item => item.total)
        }]

        // this.chartOptions.xaxis.categories = response.data.map(item => item.profession)
        // this.chartOptions.legend.show = false // fuerza ocultar leyenda numérica
        this.chartOptions.xaxis.categories = response.data.map(item => item.profession)
      } catch (error) {
        console.error('Error al obtener datos:', error)
      }
    }
  }
}
</script>
