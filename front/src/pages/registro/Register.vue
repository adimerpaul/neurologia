<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-markup-table dense wrap-cells>
      <thead>
      <tr>
        <th>Opciones</th>
        <th>Nombre Completo</th>
        <th>CI</th>
        <th>Teléfono</th>
        <th>Ver foto</th>
        <th>Email</th>
        <th>Profesión</th>
        <th>Departamento</th>
        <th>Provincia</th>
        <th>Dirección</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(registro, index) in registros" :key="index">
        <td>
          <q-btn-dropdown color="primary" text-color="white" dense label="Opciones" no-caps size="xs">
            <q-list>
              <q-item clickable @click="crearUsuario(registro)" v-close-popup>
                <q-item-section>Crear usuario</q-item-section>
              </q-item>
              <q-item clickable @click="mandarRegistro(registro)" v-close-popup>
                <q-item-section>Mandar por WhatsApp</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </td>
        <td>{{ registro.firstName }} {{ registro.firstSurname }} {{ registro.secondSurname }}</td>
        <td>{{ registro.ci }}</td>
        <td>{{ registro.phone }}</td>
        <td>
          <q-img
          :src="`${$url}../storage/${registro.file}`"
            style="max-width: 100px; max-height: 100px;"
            @click="verFoto(registro.file)"
          />
        </td>
        <td>{{ registro.email }}</td>
        <td>{{ registro.profession }}</td>
        <td>{{ registro.departamento }}</td>
        <td>{{ registro.provincia }}</td>
        <td>{{ registro.direccion }}</td>
      </tr>
      </tbody>
    </q-markup-table>
<!--    <pre>{{registros}}</pre>-->
<!--    [-->
<!--    {-->
<!--    "id": 2,-->
<!--    "firstSurname": "bbb",-->
<!--    "secondSurname": "bb",-->
<!--    "firstName": "bb",-->
<!--    "secondName": "bb",-->
<!--    "ci": "2342",-->
<!--    "phone": "23432",-->
<!--    "email": "adimer101@gmail.com",-->
<!--    "profession": "Especialista",-->
<!--    "professionOther": null,-->
<!--    "departamento": "Beni",-->
<!--    "provincia": "bolvia/cercado/oruro",-->
<!--    "direccion": "avenida dn y tartawoski",-->
<!--    "cursoTaller": 1,-->
<!--    "file": "comprobantes/1cSY4QK5cT9LGi9oKUJX0Qz06uPFrObqn1WPajIA.png",-->
<!--    "file2": null-->
<!--    },-->
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
    crearUsuario (registro) {
      this.$q.loading.show()
      this.$axios.post('/registro/crear-usuario', { id: registro.id })
        .then(res => {
          this.$q.notify({ type: 'positive', message: res.data.message, position: 'top' })
        })
        .catch(err => {
          const msg = err.response?.data?.message || 'Error al crear usuario'
          this.$q.notify({ type: 'warning', message: msg, position: 'top' })
        })
        .finally(() => {
          this.$q.loading.hide()
        })
    },
    verFoto (file) {
      this.$q.dialog({
        title: 'Ver foto',
        message: `<img src="${this.$url}../storage/${file}" style="max-width: 100%; max-height: 100%;" />`,
        persistent: true,
        html: true
      })
    },
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
