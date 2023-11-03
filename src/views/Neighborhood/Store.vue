<template>
  <div>
   <h5>Novo bairro</h5>
   <label for="">Nome</label>
   <input v-model="neighborhood.name" type="text">
   <label for="">Valor</label>
   <input v-model="neighborhood.value" type="text">
  </div>
</template>

<script>
import Api from '@/api.js'
  export default {
    data: () => {
      return {
        neighborhood: {
          name: null,
          value: null
        }
      }
    },
    mounted() {
      this.load()
    },
    methods: {
      load() {
        Api.get('neighborhood').then(({ data }) => {
          this.neighborhoods = data.neighborhoods
        })
      },
      submit() {
        Api.post('neighborhood', this.neighborhood).then(({ data }) => {
          this.$bvModal.show({ title: 'Sucesso', message: data.message })
        })
      }
    }
  }

</script>

<style>

</style>
