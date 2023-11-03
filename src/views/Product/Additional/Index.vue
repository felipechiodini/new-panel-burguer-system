<template>
  <b-card>
    <template #header>
      <div class="d-flex align-items-center">
        <h5 class="m-0">Adicionais</h5>
        <b-button class="ml-auto" variant="primary" size="sm" :to="'product/1/substituicao/nova'">Novo Adicional</b-button>
      </div>
    </template>
    <div class="table-responsive">
      <table class="table border w-100">
        <tr>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
        <tr v-for="(additional, key) in page?.data" :key="key">
          <td>{{ additional.name }}</td>
          <td>{{ additional.value }}</td>
          <td>
            <b-button size="sm" variant="dark"><i class="fas fa-edit"></i></b-button>
            <b-button class="ml-1" size="sm" variant="danger"><i class="fas fa-trash"></i></b-button>
          </td>
        </tr>
      </table>
    </div>
  </b-card>
</template>

<script>
import Api from '@/api.js'

export default {
  data: () => {
    return {
      page: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      Api.get(`product/${this.$route.params.product_id}/additionals`).then(({ data }) => {
        this.page = data.page
      })
    },
    store() {
      this.$router.push({
        name: 'photo.store',
        params: {
          product_id: this.$route.params.product_id
        }
      })
    }
  }
}
</script>
