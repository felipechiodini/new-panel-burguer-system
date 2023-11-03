<template>
  <b-card class="m-4 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Nova Substituição</h5>
      </div>
    </template>
    <label for="">Nome</label>
    <b-input v-model="replacement.name"></b-input>
    <label for="">Valor</label>
    <currency v-model="replacement.value"></currency>
    <template #footer>
      <b-button variant="primary" @click="save()">Criar Substituição</b-button>
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
      replacement: {
        name: null,
        value: null,
      }
    }
  },
  methods: {
    save() {
      Api.post(`product/${this.$router.product_id}/replacement`, this.replacement).then(({ data }) => {
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
