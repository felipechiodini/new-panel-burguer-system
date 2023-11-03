<template>
  <b-card class="shadow">
    <div class="d-flex align-items-center" slot="header">
      <h5 class="m-0">Produtos</h5>
      <b-button class="ml-auto" variant="primary" size="sm" to="produtos/novo">Novo Produto</b-button>
    </div>
    <div class="table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>Nome</th>
        </tr>
        <template v-if="loading === false && error === false">
          <tr v-for="(product, key) in page?.data" :key="key">
            <td>{{ product.name }}</td>
            <td class="d-flex">
              <b-button @click="goToEdit(product)" size="sm" variant="dark"><i class="fas fa-edit"></i></b-button>
              <b-button @click="showModalDelete(product)" class="ml-1" size="sm" variant="danger"><i class="fas fa-trash"></i></b-button>
            </td>
          </tr>
        </template>
      </table>
    </div>
    <modal-delete name="produto" :path="`product/${selectedProduct?.id}`"></modal-delete>
  </b-card>
</template>

<script>
import ModalDelete from '@/components/ModalDelete.vue'
import Api from '@/api.js'

export default {
  metaInfo: {
    titleTemplate: '%s | Produtos'
  },
  components: {
    ModalDelete
  },
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
      Api.get('product').then(({ data }) => {
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
