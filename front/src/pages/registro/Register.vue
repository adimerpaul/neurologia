<template>
  <q-page class="bg-grey-3 q-pa-md">
    <q-card flat bordered>
      <q-card-section class="q-pa-xs">
        <div class="row">
          <div class="col-12 col-md-8">
<!--            input buscar-->
            <q-input
              v-model="search"
              dense
              outlined
              label="Buscar"
              class="q-mb-md"
              @update:modelValue="filterRegistros"
            />
          </div>
          <div class="col-12 col-md-2">
            <q-btn @click="registroGet" color="primary" label="Actualizar Registros" class="q-mb-md" no-caps :loading="loading"
                   icon="refresh" />
          </div>
          <div class="col-12 col-md-2 text-right">
            <q-btn @click="clickRegistrar" color="green" label="Crear Registro" class="q-mb-md" no-caps icon="add_circle" />
          </div>
        </div>
      </q-card-section>
    </q-card>
    <q-markup-table dense wrap-cells flat bordered>
      <thead>
      <tr>
        <th>Opciones</th>
        <th>Nombre Completo</th>
        <th>CI</th>
        <th>Teléfono</th>
        <th>Ver foto</th>
<!--        <th>Ver foto</th>-->
        <th>Email</th>
        <th>Profesión</th>
        <th>Departamento</th>
        <th>Provincia</th>
        <th>Dirección</th>
        <th>Curso/Taller</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(registro, index) in registros" :key="index">
        <td>
          <q-btn-dropdown color="primary" text-color="white" dense label="Opciones" no-caps size="xs" :loading="loading">
            <q-list>
              <q-item clickable @click="crearUsuario(registro)" v-close-popup>
                <q-item-section avatar>
                  <q-icon name="person_add" />
                </q-item-section>
                <q-item-section>Crear usuario</q-item-section>
              </q-item>
              <q-item clickable @click="mandarRegistro(registro)" v-close-popup>
                <q-item-section avatar>
                  <q-icon name="fa-brands fa-whatsapp" />
                </q-item-section>
                <q-item-section>Mandar por WhatsApp</q-item-section>
              </q-item>
              <q-item clickable @click="editarRegistro(registro)" v-close-popup>
                <q-item-section avatar>
                  <q-icon name="visibility" />
                </q-item-section>
                <q-item-section>Ver</q-item-section>
              </q-item>
              <q-item clickable @click="eliminarRegistro(registro)" v-close-popup>
                <q-item-section avatar>
                  <q-icon name="delete" />
                </q-item-section>
                <q-item-section>Eliminar</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </td>
        <td>{{ registro.firstSurname }} {{ registro.secondSurname }} {{ registro.firstName }} {{ registro.secondName }}</td>
        <td>{{ registro.ci }}</td>
        <td>{{ registro.phone }}</td>
        <td>
          <q-img
          :src="`${$url}../storage/${registro.file}`"
            style="max-width: 100px; max-height: 100px;"
            @click="verFoto(registro.file)"
          />
        </td>
<!--        <td>-->
<!--          <q-img-->
<!--            :src="`${$url}../storage/${registro.file2}`"-->
<!--            style="max-width: 100px; max-height: 100px;"-->
<!--            @click="verFoto(registro.file2)"-->
<!--          />-->
<!--        </td>-->
        <td>{{ registro.email }}</td>
        <td>{{ registro.profession }}</td>
        <td>{{ registro.departamento }}</td>
        <td>{{ registro.provincia }}</td>
        <td>{{ registro.direccion }}</td>
        <td>{{ registro.cursoTaller }}</td>
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
    <q-dialog v-model="registroDialog" persistent>
      <q-card>
        <q-card-section class="q-pb-none">
          {{ registro.id ? 'Editar Registro' : 'Crear Registro' }}
          <q-btn flat icon="close" @click="registroDialog = false" class="absolute-top-right q-mt-xs q-mr-xs" />
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="submit">
            <q-input v-model="registro.firstSurname" dense outlined label="Apellido Paterno" />
            <q-input v-model="registro.secondSurname" dense outlined label="Apellido Materno" />
            <q-input v-model="registro.firstName" dense outlined label="Nombre" />
            <q-input v-model="registro.secondName" dense outlined label="Segundo Nombre" />
            <q-input v-model="registro.ci" dense outlined label="CI" />
            <q-input v-model="registro.phone" dense outlined label="Teléfono" />
            <q-input v-model="registro.email" dense outlined label="Email" type="email" />
            <q-input v-model="registro.profession" dense outlined label="Profesión" />
            <q-input v-model="registro.departamento" dense outlined label="Departamento" />
            <q-input v-model="registro.provincia" dense outlined label="Provincia" />
            <q-input v-model="registro.direccion" dense outlined label="Dirección" />
            <q-input v-model="registro.cursoTaller" dense outlined label="Curso/Taller" />
<!--            file file2-->
            <q-file v-model="registro.file" dense outlined label="Comprobante de pago" type="file" />
            <q-file v-model="registro.file2" dense outlined label="Comprobante de pago 2" type="file" />
            <div class="q-mt-md">
              <q-btn type="submit" color="primary" :loading="loading">Guardar</q-btn>
              <q-btn flat @click="registroDialog = false" :loading="loading">Cancelar</q-btn>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>
<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      loading: false,
      registros: [],
      registrosAll: [],
      registro: {},
      registroDialog: false,
      search: ''
    }
  },
  mounted () {
    this.registroGet()
  },
  methods: {
    filterRegistros () {
      if (this.search) {
        this.registros = this.registrosAll.filter(registro => {
          return (
            registro.firstSurname.toLowerCase().includes(this.search.toLowerCase()) ||
            registro.secondSurname.toLowerCase().includes(this.search.toLowerCase()) ||
            registro.firstName.toLowerCase().includes(this.search.toLowerCase()) ||
            registro.secondName.toLowerCase().includes(this.search.toLowerCase()) ||
            registro.ci.includes(this.search) ||
            registro.phone.includes(this.search) ||
            registro.email.toLowerCase().includes(this.search.toLowerCase())
          )
        })
      } else {
        this.registros = this.registrosAll
      }
    },
    clickRegistrar () {
      this.registro = {}
      this.registroDialog = true
    },
    submit () {
      if (this.registro.id) {
        this.updateRegistro()
      } else {
        this.crearRegistro()
      }
    },
    updateRegistro () {
      this.loading = true
      const formData = new FormData()
      formData.append('id', this.registro.id)
      formData.append('firstSurname', this.registro.firstSurname)
      formData.append('secondSurname', this.registro.secondSurname)
      formData.append('firstName', this.registro.firstName)
      formData.append('secondName', this.registro.secondName)
      formData.append('ci', this.registro.ci)
      formData.append('phone', this.registro.phone)
      formData.append('email', this.registro.email)
      formData.append('profession', this.registro.profession)
      formData.append('departamento', this.registro.departamento)
      formData.append('provincia', this.registro.provincia)
      formData.append('direccion', this.registro.direccion)
      formData.append('cursoTaller', this.registro.cursoTaller)
      if (this.registro.file) {
        formData.append('file', this.registro.file)
      }
      if (this.registro.file2) {
        formData.append('file2', this.registro.file2)
      }
      this.$axios.post(`registro/${this.registro.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          this.$q.notify({ type: 'positive', message: 'Registro actualizado', position: 'top' })
          this.registroGet()
        })
        .catch(err => {
          const msg = err.response?.data?.message || 'Error al actualizar registro'
          this.$q.notify({ type: 'red', message: msg, position: 'top' })
        })
        .finally(() => {
          this.registroDialog = false
          this.loading = false
        })
    },
    crearRegistro () {
      this.loading = true
      const formData = new FormData()
      formData.append('firstName', this.registro.firstName)
      formData.append('firstSurname', this.registro.firstSurname)
      formData.append('secondSurname', this.registro.secondSurname)
      formData.append('ci', this.registro.ci)
      formData.append('phone', this.registro.phone)
      formData.append('email', this.registro.email)
      formData.append('profession', this.registro.profession)
      formData.append('departamento', this.registro.departamento)
      formData.append('provincia', this.registro.provincia)
      formData.append('direccion', this.registro.direccion)
      formData.append('cursoTaller', this.registro.cursoTaller)
      formData.append('file', this.registro.file)
      formData.append('file2', this.registro.file2)
      this.$axios.post('registro', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          this.$q.notify({ type: 'positive', message: res.data.message, position: 'top' })
          this.registroGet()
        })
        .catch(err => {
          const msg = err.response?.data?.message || 'Error al crear registro'
          this.$q.notify({ type: 'red', message: msg, position: 'top' })
        })
        .finally(() => {
          this.registroDialog = false
          this.loading = false
        })
    },
    eliminarRegistro (registro) {
      this.$q.dialog({
        title: 'Eliminar Registro',
        message: `¿Está seguro de eliminar el registro de ${registro.firstName} ${registro.firstSurname}?`,
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.loading = true
        this.$axios.delete(`registro/${registro.id}`)
          .then(res => {
            this.$q.notify({ type: 'positive', message: res.data.message, position: 'top' })
            this.registroGet()
          })
          .catch(err => {
            const msg = err.response?.data?.message || 'Error al eliminar registro'
            this.$q.notify({ type: 'red', message: msg, position: 'top' })
          })
          .finally(() => {
            this.loading = false
          })
      })
    },
    editarRegistro (registro) {
      this.registro = { ...registro }
      this.registroDialog = true
    },
    mandarRegistro (registro) {
      const numero = registro.phone.replace(/\D/g, '') // limpia espacios o guiones
      const mensaje = `Hola ${registro.firstName}, te damos la bienvenida. Tu cuenta ha sido creada:\n\nUsuario: ${registro.ci}\nContraseña: ${registro.ci}`

      const url = `https://wa.me/591${numero}?text=${encodeURIComponent(mensaje)}`
      window.open(url, '_blank')
    },
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
          this.registrosAll = response.data
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
