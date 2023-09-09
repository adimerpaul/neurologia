<template>
      <q-page class="fondo q-pa-lg">
        <div class="row">
          <div class="col-12">
            <q-card class="q-pa-md bg-grey-3">
              <q-card-section class="text-h2 fondo">
                <div class="text-center text-bold text-white">
                  BIBLIOTECA VIRTUAL
                </div>
              </q-card-section>
              <q-card-section class="q-pa-none">
                <div class="row">
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/700 Essential Neurology Checklists by Ibrahim Imam (z-lib.org).pdf">
                      700 Essential Neurology Checklists by Ibrahim Imam (z-lib.org).pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Bioquimica Medica Baynes 5a Edicion.pdf">
                      Bioquimica Medica Baynes 5a Edicion.pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Consejos a un joven estudiante de medicina.pdf">
                      Consejos a un joven estudiante de medicina.pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Diagnostic imaging Spine by Ross, Moore (z-lib.org).pdf">
                      Diagnostic imaging Spine by Ross, Moore (z-lib.org).pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Localization in Clinical Neurology, 6th Edition by Paul W. Brazis, Joseph Masdeu, José Biller MD FACP FAAN FAHA (z-lib.org).pdf">
                      Localization in Clinical Neurology, 6th Edition by Paul W. Brazis, Joseph Masdeu, José Biller MD FACP FAAN FAHA (z-lib.org).pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Los 7 pecados cerebrales_booksmedicos.org.pdf">
                      Los 7 pecados cerebrales_booksmedicos.org.pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Neurologia de Merritt, 12a edición (Spanish Edition) by Timothy A. Pedley Lewis P. Rowland [Pedley, Timothy A.] (z-lib.org).pdf">
                      Neurologia de Merritt, 12a edición (Spanish Edition) by Timothy A. Pedley Lewis P. Rowland [Pedley, Timothy A.] (z-lib.org).pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Neurologic-Psychiatric Syndromes in Focus Part I by Julien Bogousslavsky (z-lib.org).pdf">
                      Neurologic-Psychiatric Syndromes in Focus Part I by Julien Bogousslavsky (z-lib.org).pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Neurological Disorders in Famous Artists (Frontiers of Neurology and Neuroscience), Part 3 by J. Bogousslavsky, M. G. Hennerici, H. Bazner, C. Bassetti (z-lib.org).pdf">
                      Neurological Disorders in Famous Artists (Frontiers of Neurology and Neuroscience), Part 3 by J. Bogousslavsky, M. G. Hennerici, H. Bazner, C. Bassetti (z-lib.org).pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Sindromes Neurologicos.pdf">
                      Sindromes Neurologicos.pdf
                    </q-btn>
                  </div>
                  <div class="col-12 q-pa-xs">
                    <q-btn color="blue-10" icon="book" href="libros/Tintinalli Manual de Medicina de Urgencias 7a Ed_booksmedicos.org.pdf">
                      Tintinalli Manual de Medicina de Urgencias 7a Ed_booksmedicos.org.pdf
                    </q-btn>
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
  name: 'BibliotecaPage',
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
