<template>
  <q-page class="q-pa-md bg-grey-3">
    <q-card>
      <q-card-section class="q-pb-none">
        <div class="text-h6">Perfil</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-6 col-md-2 text-bold">Primer Nombre</div>
          <div class="col-6 col-md-4">{{ $store.user.firstName }}</div>
          <div class="col-6 col-md-2 text-bold">Segundo Nombre</div>
          <div class="col-6 col-md-4">{{ $store.user.secondName }}</div>
          <div class="col-6 col-md-2 text-bold">Primer Apellido</div>
          <div class="col-6 col-md-4">{{ $store.user.lastName }}</div>
          <div class="col-6 col-md-2 text-bold">Segundo Apellido</div>
          <div class="col-6 col-md-4">{{ $store.user.secondLastName }}</div>
          <div class="col-6 col-md-2 text-bold">Telefono</div>
          <div class="col-6 col-md-4">{{ $store.user.phone }}</div>
          <div class="col-6 col-md-2 text-bold">Profesion</div>
          <div class="col-6 col-md-4">{{ $store.user.profession }}</div>
          <div class="col-6 col-md-2 text-bold">Email</div>
          <div class="col-6 col-md-4">{{ $store.user.email }}</div>
          <div class="col-6 col-md-2 text-bold">Departamento</div>
          <div class="col-6 col-md-4">{{ $store.user.departamento }}</div>
          <div class="col-6 col-md-2 text-bold">Provincia</div>
          <div class="col-6 col-md-4">{{ $store.user.provincia }}</div>
          <div class="col-6 col-md-2 text-bold">Direccion</div>
          <div class="col-6 col-md-4">{{ $store.user.direccion }}</div>
        </div>
      </q-card-section>
      <q-card-section class="q-pb-none">
        <div class="text-h6">Cambiar Contraseña</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit.prevent="cambiarPass">
          <div class="row">
            <div class="col-6 col-md-2 text-bold">Contraseña Actual</div>
            <div class="col-6 col-md-4">
              <q-input outlined dense v-model="user.password" placeholder="Contraseña actual"
                       :rules="[val => !!val || 'Este campo es requerido']" :type="showPassword ? 'text' : 'password'">
                <template v-slot:append>
                  <q-icon class="cursor-pointer" @click="showPassword = !showPassword" :name="showPassword ? 'visibility_off' : 'visibility'">
                    <q-tooltip>Contraseña</q-tooltip>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-6"></div>
            <div class="col-6 col-md-2 text-bold">Nueva Contraseña</div>
            <div class="col-6 col-md-4">
              <q-input outlined dense v-model="user.newPassword" placeholder="Nueva contraseña"
                        :rules="[val => !!val || 'Este campo es requerido']" :type="showPassword ? 'text' : 'password'">
                <template v-slot:append>
                  <q-icon class="cursor-pointer" @click="showPassword = !showPassword" :name="showPassword ? 'visibility_off' : 'visibility'">
                    <q-tooltip>Contraseña</q-tooltip>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-6"></div>
            <div class="col-6 col-md-2 text-bold">Confirmar Contraseña</div>
            <div class="col-6 col-md-4">
              <q-input outlined dense v-model="user.confirmPassword" placeholder="Confirmar contraseña"
                        :rules="[val => !!val || 'Este campo es requerido', val => val === user.newPassword || 'Las contraseñas no coinciden']" :type="showPassword ? 'text' : 'password'">
                <template v-slot:append>
                  <q-icon class="cursor-pointer" @click="showPassword = !showPassword" :name="showPassword ? 'visibility_off' : 'visibility'">
                    <q-tooltip>Contraseña</q-tooltip>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-12 col-md-6"></div>
            <div class="col-12 col-md-12 flex flex-center q-pa-md">
              <q-btn color="primary" label="Cambiar Contraseña" :loading="loading" type="submit"/>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
<!--    <pre>{{$store.user}}</pre>-->
  </q-page>
</template>
<script>
export default {
  name: 'PerfilPage',
  data () {
    return {
      loading: false,
      user: this.$store.user,
      showPassword: false
    }
  },
  created () {
  },
  methods: {
    cambiarPass () {
      this.loading = true
      this.$axios.post('cambiarPass', this.user)
        .then(() => {
          this.loading = false
          this.user.password = ''
          this.user.newPassword = ''
          this.user.confirmPassword = ''
          this.$alert.success('Contraseña cambiada correctamente')
        })
        .catch((err) => {
          this.loading = false
          this.$alert.error(err.response.data.message)
        })
    }
  }
}
</script>
<style scoped lang="sass">

</style>
