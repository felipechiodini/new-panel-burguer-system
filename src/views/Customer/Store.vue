<template>
  <div>
    <div>
      <h5>Novo Cliente</h5>
      <label for="">Nome</label>
      <b-input v-model="customer.name" />
      <label for="">Telefone</label>
      <b-input v-model="customer.cellphone" />
    </div>
    <div>
      <h5>Endereço</h5>
      <label for="">Bairro</label>
      <b-form-select v-model="address.neighborhood" :options="neighborhoods"></b-form-select>
      <label for="">Rua</label>
      <b-input v-model="address.street"></b-input>
      <label for="">Número</label>
      <b-input v-model="address.number"></b-input>
      <label for="">Complemento</label>
      <b-input v-model="address.complement"></b-input>
      <b-button @click="submit()">Salvar</b-button>
      <b-button @click="$route.back()">Cancelar</b-button>
    </div>
  </div>
</template>

<script>
import Api from '@/api.js'
  export default {
    data: () => {
      return {
        address: {
          street: null,
          number: null,
          complement: null,
        },
        neighborhoods: []
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
        Api.post('customer').then(({ data }) => {
          this.$bvModal.show({ title: 'Sucesso', message: data.message })
        })
      }
    }
  }

</script>

<style>

</style>
