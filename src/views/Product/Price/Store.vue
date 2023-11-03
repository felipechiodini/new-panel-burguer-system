<template>
  <b-card class="m-4 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Novo Preço</h5>
      </div>
    </template>
    <label for="">Valor</label>
    <currency v-model="price.value"></currency>
    <label for="">Data Inicio</label>
    <b-input v-model="price.start"></b-input>
    <label for="">Data Fim</label>
    <b-input v-model="price.end"></b-input>
    <template #footer>
      <b-button variant="primary" @click="save()">Criar Preço</b-button>
    </template>
  </b-card>
</template>

<script>
import Api from '@/api.js'
import Currency from '@/components/Currency.vue'

export default {
  components: {
    Currency
  },
  data: () => {
    return {
      price: {
        value: null,
        start: null,
        end: null,
      }
    }
  },
  methods: {
    save() {
      Api.post(`product/${this.$router.product_id}/price`, this.price).then(({ data }) => {
        this.$bvToast.toast(data.message, {
          title: 'Sucesso',
          variant: 'success'
        })
      })
    }
  }
}
</script>

<style>

</style>
