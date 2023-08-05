<template>
  <q-page>
    <div class="row">
      <div class="col-2"></div>
      <div class="col-8">
        <q-img src="356879877_584668113818175_8097994551976256420_n.jpg" />
      </div>
      <div class="col-2"></div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data () {
    return {
      slide: 'first'
    }
  }
})
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
