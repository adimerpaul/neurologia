<template>
      <q-page class="fondo q-pa-lg">
        <div class="row">
          <div class="col-12">
            <q-card class="q-pa-md bg-grey-3">
              <q-card-section class="text-h4 fondo">
                <div class="text-center text-bold text-white">
                  PROGRAMA GENERAL
                </div>
              </q-card-section>
              <q-card-section class="q-pa-none">
                <div class="row">
<!--                  <q-card v-for="p in programas" :key="p.date" class="q-my-md">-->
<!--                    <q-card-section >-->
<!--                      <div class="text-h6 text-blue-10 text-bold text-center" style="text-decoration: underline;">-->
<!--                        {{ $filters.dateDdM(p.date) }}-->
<!--                      </div>-->
<!--                      <div class="text-h6 texto-programa" v-for="video in p.videos" :key="video.id">-->
<!--                        <span class="text-red">{{video.hora}}</span> | {{video.text}}-{{video.title}}-->
<!--                      </div>-->
<!--                    </q-card-section>-->
<!--                  </q-card>-->
                  <q-card class="q-my-md">
                    <q-card-section class="q-pa-md">
                      <!-- Jueves 12 de Junio -->
                      <div class="text-h6 text-center text-bold text-primary">
                        Jueves 12 de Junio
                      </div>
                      <div class="text-subtitle2 text-bold text-primary">Moderadora: Dra. Aleida López</div>
                      <div class="text-subtitle2 text-bold text-primary">Secretario de Mesa: Dr. Héctor Copa Magne</div>
                      <ul class="texto-programa q-mt-sm">
                        <li><strong>14:00</strong> - Inauguración<br>Dr. Juan Roly Condori Jamachi</li>
                        <li><strong>14:10</strong> - Cefalea en Urgencias (Oruro)<br>Dr. Igor Oliver Quilo Álvarez</li>
                        <li><strong>14:50</strong> - Trastornos neurológicos en paciente obeso (Oruro)<br>Dra. Jhenny Achá</li>
                        <li><strong>15:30</strong> - Cuidado de enfermería del paciente neurocrítico (Oruro)<br>MSc. María Luz Quispe Salcedo</li>
                        <li><strong>16:10</strong> - Enfermedades neuromusculares, apoyo diagnóstico (Cochabamba)<br>Dr. Wilfredo Rodríguez Sandoval</li>
                        <li><strong>16:50</strong> - Abordaje terapéutico integral en el TEA (La Paz)<br>Rodrigo Saire (Psicomotricidad)</li>
                        <li><strong>17:30</strong> - Refrigerio</li>
                        <li><strong>18:00</strong> - Neurodesarrollo y eje intestino-cerebro (Oruro)<br>Dra. Verónica Herrera Alcalá</li>
                        <li><strong>18:40</strong> - Enfermedad cerebrovascular en la altura (Potosí)<br>Dr. Carlos Flores</li>
                        <li><strong>19:20</strong> - Deterioro cognitivo leve y demencias (La Paz)<br>Dra. Katherine Ramírez</li>
                        <li><strong>20:00</strong> - Actualización en meningitis (Santa Cruz)<br>Dra. Elizabeth Crespo</li>
                        <li><strong>20:40</strong> - Temblor, diagnóstico y tratamiento (La Paz)<br>Dr. Sergio Silva</li>
                        <li><strong>21:20</strong> - Cierre de actividad de fecha 12 de junio</li>
                      </ul>

                      <!-- Viernes 13 de Junio -->
                      <div class="text-h6 text-center text-bold text-primary q-mt-md">
                        Viernes 13 de Junio
                      </div>
                      <div class="text-subtitle2 text-bold text-primary">Moderadora: Dra. Nineth Apaza</div>
                      <div class="text-subtitle2 text-bold text-primary">Secretario de Mesa: Dr. Héctor Copa Magne</div>
                      <ul class="texto-programa q-mt-sm">
                        <li><strong>14:00</strong> - Enfermedad cerebrovascular isquémica, colateralidad del cerebro (La Paz)<br>Dr. Roly Condori</li>
                        <li><strong>14:40</strong> - Tratamiento de las migrañas, nuevos avances (La Paz)<br>Dra. María Isabel Cusicanqui</li>
                        <li><strong>15:20</strong> - Enfermedad cerebrovascular hemorrágica, nuevos avances (La Paz)<br>Dr. María Eugenia Tejada</li>
                        <li><strong>16:10</strong> - Enfermedades neurodegenerativas del adulto mayor (Cochabamba)<br>Dr. Lucio Gonzales</li>
                        <li><strong>16:50</strong> - Estado epiléptico (La Paz)<br>Dra. Penélope Michel Herbas</li>
                        <li><strong>17:30</strong> - Refrigerio</li>
                        <li><strong>18:00</strong> - Trastorno de déficit atencional e hiperactividad en adultos (La Paz)<br>Dr. Lenin Peñaloza</li>
                        <li><strong>18:40</strong> - Diagnóstico y tratamiento del Parkinson: lo que ya cambió (Santa Cruz)<br>Dr. Erick González Delgado</li>
                        <li><strong>19:20</strong> - Trastorno de déficit atencional e hiperactividad (Santa Cruz)<br>Dr. Roberto Terrazas</li>
                        <li><strong>20:00</strong> - Rasgos de espectro autista (La Paz)<br>Dra. Claudia Hernández</li>
                        <li><strong>20:40</strong> - Lesiones hipodensas múltiples en la tomografía computarizada de urgencias (Oruro)<br>Dr. Roberto Miranda Sánchez</li>
                        <li><strong>21:10</strong> - Cierre de la actividad de fecha 13 de junio</li>
                      </ul>

                      <!-- Sábado 14 de Junio -->
                      <div class="text-h6 text-center text-bold text-primary q-mt-md">
                        Sábado 14 de Junio
                      </div>
                      <div class="text-subtitle2 text-bold text-primary">Moderadora: Dra. Jheny Copa</div>
                      <div class="text-subtitle2 text-bold text-primary">Secretario de Mesa: Dr. Héctor Copa Magne</div>
                      <ul class="texto-programa q-mt-sm">
                        <li><strong>08:00</strong> - Más allá del EEG convencional: utilidad y aplicaciones clínicas del Video-EEG en epilepsia pediátrica (Santa Cruz)<br>Dra. Giovana Flores</li>
                        <li><strong>08:40</strong> - Síndrome de Guillain Barré (La Paz)<br>Dra. Patricia Caballero</li>
                        <li><strong>09:20</strong> - Herpes Zóster y neuralgia postherpética (La Paz)<br>Dr. Juan Carlos Durán</li>
                        <li><strong>10:00</strong> - Encefalopatía neonatal (Sucre)<br>Dr. Rafael Prudencio</li>
                        <li><strong>10:40</strong> - Refrigerio</li>
                        <li><strong>11:10</strong> - Lesiones traumáticas de nervios (Cochabamba)<br>Dr. Henry Nuñez</li>
                        <li><strong>11:50</strong> - Diagnóstico y tratamiento de epilepsia (La Paz)<br>Dra. Helen Paz</li>
                        <li><strong>12:30</strong> - Inteligencia artificial en el presente y futuro de la neurología (Cochabamba)<br>Dr. Víctor Villarroel</li>
                        <li><strong>13:10</strong> - Trastornos del sueño (Santa Cruz)<br>Dr. Gualberto Campos</li>
                        <li><strong>13:50</strong> - Clausura<br>Dr. Héctor Copa Magne</li>
                      </ul>
                    </q-card-section>

                  </q-card>
                </div>
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
    // this.$q.loading.show()
    // this.$axios.get('programa')
    //   .then(response => {
    //     this.programas = response.data
    //   })
    //   .catch(error => {
    //     this.$alert.error(error.response.data.message)
    //   }).finally(() => {
    //     this.$q.loading.hide()
    //   })
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
.texto-programa{
  text-indent: 2em;
}
@media (max-width: 1024px) {
  .texto-programa{
    text-indent: 0em;
    font-size: 12px;
  }
}
</style>
