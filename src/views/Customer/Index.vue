<template>
  <b-card class="m-3 shadow">
    <div class="d-flex align-items-center" slot="header">
      <h5 class="m-0">Clientes</h5>
    </div>
    <div class="table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Endereço</th>
        </tr>
        <template v-if="loading === false && error === false">
          <tr v-for="(order, key) in page?.data" :key="key">
            <td>{{ order.id }}</td>
            <td>{{ order.customer.name }}</td>
            <td>{{ order.description }}</td>
          </tr>
        </template>
      </table>
    </div>
  </b-card>
</template>

<script>
import Api from '@/api.js'

export default {
  data: () => {
    return {
      page: null,
      loading: false,
      error: false,
      selectedProduct: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      Api.get('customers').then(({ data }) => {
        this.page = data.page
      }).catch(() => {
        this.error = true
      }).finally(() => {
        this.loading = false
      })
    },
    showModalDelete(product) {
      this.selectedProduct = product
      this.$bvModal.show('modal-delete')
    },
    goToEdit(product) {
      this.$router.push({
        name: 'product.update',
        params: {
          product_id: product.id
        }
      })
    }
  }
}
</script>

<style>

</style>
