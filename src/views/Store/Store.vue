<template>
  <div>
    <label for="store-name">Nome da Loja</label>
    <b-input v-model="store.name" type="text" id="store-name" />
    <b-button @click="create()">Criar</b-button>
  </div>
</template>

<script>
import Api from '@/api.js'

export default {
  data: () => {
    return {
      store: {
        name: null
      }
    }
  },
  methods: {
    create() {
      this.loading = true
      Api.post('store', this.store).then(({ data }) => {
        this.$bvToast.show(data.message, { title: 'Sucesso', variant: 'sucess' })
        this.$router.back()
      }).catch((error) => {
        this.$bvToast.toast(error.response.data.message, { title: 'Falha', variant: 'danger' })
      }).finally(() => {
        this.loading = true
      })
    }
  }
}
</script>

<style>

</style>
