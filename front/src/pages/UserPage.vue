<template>
  <q-page>
    <q-table :rows="users" :columns="userColums" :filter="search" dense
             :rows-per-page-options="[0]">
    >
      <template v-slot:top-right>
        <q-toolbar>
          <q-btn icon="add_circle_outline" @click="showAddUserDialog = true;userCrear=true"
                 label="Agregar" dense no-caps color="primary"
          />
          <q-btn icon="refresh" @click="usersGet" flat color="primary" />
          <q-input v-model="search"  outlined  dense placeholder="Buscar..." clearable>
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </q-toolbar>
      </template>
      <template v-slot:body-cell-porcentaje="props">
        <q-td :props="props">
          <q-linear-progress stripe rounded size="20px" :value="props.row.porcentaje/100" color="primary" class="q-mt-sm">
            <div class="absolute-full flex flex-center">
              <q-badge color="white" size="10px" text-color="accent" :label="`${props.row.porcentaje}%`"/>
            </div>
          </q-linear-progress>
        </q-td>
      </template>
      <template v-slot:body-cell-option="props">
        <q-td :props="props" auto-width >
          <q-btn flat dense icon="o_edit" @click="userEdit(props.row)" />
          <q-btn flat dense v-if="props.row.id!=1" icon="o_delete" @click="userDelete(props.row)" />
          <q-btn flat dense v-if="props.row.id!=1" icon="o_key" @click="updatePassword(props.row)" />
        </q-td>
      </template>
    </q-table>
    <q-dialog v-model="showAddUserDialog" >
      <q-card style="width: 700px;max-width: 85vw">
        <q-card-section class="row items-center">
          <div class="text-h6">Agregar Usuario</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="userCreate">
            <q-input v-model="user.firstName" hint="" required dense outlined label="Primer Nombre" />
            <q-input v-model="user.secondName" hint="" dense outlined label="Segundo Nombre" />
            <q-input v-model="user.lastName" hint="" dense outlined label="Apellido Paterno" />
            <q-input v-model="user.secondLastName" hint="" dense outlined label="Apellido Materno" />
            <q-input v-model="user.email" hint="" required dense outlined label="Email" />
            <q-input v-model="user.phone" hint="" dense outlined label="Celular" />
            <q-input v-model="user.profession" hint="" dense outlined label="Especialidad" />
            <q-input v-model="user.password" type="password" hint="" required dense outlined label="Password" />
            <q-btn :loading="loading" type="submit" color="primary" icon="add_circle_outline" label="Guardar" class="full-width" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showUpdateUserDialog" >
      <q-card style="width: 700px;max-width: 85vw">
        <q-card-section class="row items-center">
          <div class="text-h6">Agregar Usuario</div>
        </q-card-section>
        <q-card-section>
          <q-form @submit.prevent="userUpdate">
            <q-input v-model="user.firstName" hint="" required dense outlined label="Primer Nombre" />
            <q-input v-model="user.secondName" hint="" dense outlined label="Segundo Nombre" />
            <q-input v-model="user.lastName" hint="" dense outlined label="Apellido Paterno" />
            <q-input v-model="user.secondLastName" hint="" dense outlined label="Apellido Materno" />
            <q-input v-model="user.email" hint="" required dense outlined label="Email" />
            <q-input v-model="user.phone" hint="" dense outlined label="Celular" />
            <q-input v-model="user.profession" hint="" dense outlined label="Especialidad" />
            <q-btn :loading="loading" type="submit" color="primary" icon="add_circle_outline" label="Guardar" class="full-width" />
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'UserPage',
  data () {
    return {
      roles: [
        'INSCRIPCION',
        'ACREDITACION',
        'REFRIGERIO',
        'ADMINISTRADOR'
      ],
      showAddUserDialog: false,
      showUpdateUserDialog: false,
      search: '',
      users: [],
      user: {},
      loading: false,
      userCrear: true,
      userColums: [
        { name: 'option', field: 'option', label: 'Opciones', align: 'left', sortable: true },
        { name: 'phone', label: 'Telefono', field: 'phone', align: 'left', sortable: true },
        { name: 'name', label: 'Nombre', field: 'name', align: 'left', sortable: true },
        { name: 'porcentaje', label: 'Porcentaje', field: 'porcentaje', align: 'left', sortable: true },
        { name: 'email', label: 'Email', field: 'email', align: 'left', sortable: true },
        { name: 'profession', label: 'Profesion', field: 'profession', align: 'left', sortable: true }
      ]
    }
  },
  methods: {
    userUpdate () {
      this.loading = true
      this.$axios.put(`users/${this.user.id}`, this.user)
        .then(res => {
          this.loading = false
          this.showUpdateUserDialog = false
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'check_circle',
            message: 'Usuario actualizado'
          })
          this.user = {}
          this.usersGet()
        })
        .catch(err => {
          console.log(err)
          this.loading = false
          this.$q.notify({
            color: 'red-4',
            textColor: 'white',
            icon: 'error',
            message: 'Error al actualizar usuario'
          })
        })
    },
    usersGet () {
      this.$q.loading.show()
      this.$axios.get('users').then(response => {
        this.users = response.data
        this.$q.loading.hide()
      })
    },
    userCreate () {
      if (this.userCrear) {
        this.loading = true
        this.$axios.post('users', this.user).then(response => {
          this.usersGet()
          this.showAddUserDialog = false
          this.user = {}
          this.loading = false
        }).catch(error => {
          this.loading = false
          this.$q.notify({
            color: 'negative',
            message: error.response.data.message,
            icon: 'report_problem',
            position: 'top'
          })
        })
      } else {
        this.loading = true
        this.$axios.put('users/' + this.user.id, this.user).then(response => {
          this.usersGet()
          this.showAddUserDialog = false
          this.user = {}
          this.loading = false
        }).catch(error => {
          this.loading = false
          this.$q.notify({
            color: 'negative',
            message: error.response.data.message,
            icon: 'report_problem',
            position: 'top'
          })
        })
      }
    },
    userEdit (user) {
      this.user = user
      this.userCrear = false
      this.showUpdateUserDialog = true
    },
    updatePassword (user) {
      this.$q.dialog({
        title: 'Cambiar contraseña',
        message: 'Ingrese la nueva contraseña',
        prompt: {
          model: '',
          type: 'password'
        },
        cancel: true,
        persistent: true
      }).onOk(data => {
        this.$axios.put(`updatePassword/${user.id}`,
          { password: data }
        )
          .then(res => {
            this.$q.notify({
              color: 'green-4',
              textColor: 'white',
              icon: 'check_circle',
              position: 'top',
              message: 'Contraseña actualizada'
            })
          })
          .catch(err => {
            this.$q.notify({
              color: 'red-4',
              textColor: 'white',
              icon: 'error',
              position: 'top',
              message: err.response.data.message
            })
          })
      }).onCancel(() => {
        console.log('Cancel')
      }).onDismiss(() => {
        console.log('Dismissed')
      })
    },
    userDelete (user) {
      this.$q.dialog({
        title: 'Eliminar',
        message: '¿Está seguro de eliminar el usuario?',
        ok: 'Si',
        cancel: 'No'
      }).onOk(() => {
        this.$q.loading.show()
        this.$axios.delete('users/' + user.id).then(response => {
          this.usersGet()
        })
      })
    }
  },
  created () {
    this.usersGet()
  }
}
</script>

<style scoped>

</style>
