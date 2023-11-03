<template>
  <div class="container">
    <label for="warning">Aviso</label>
    <b-textarea v-model="warning" id="warning" cols="30" rows="10" />
    <b-button @click="submit()" variant="primary">Salvar</b-button>
  </div>
</template>

<script>
import Api from '@/api.js'

export default {
  data: () => {
    return {
      warning: null
    }
  },
  methods: {
    submit() {
      Api.post('configuration', this.warning).then(({ data }) => {
        alert('here')
      })
    }
  }

}
</script>

<style>

</style>
