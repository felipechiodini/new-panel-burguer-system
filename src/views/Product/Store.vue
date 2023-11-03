<template>
  <b-card class="m-4 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Novo Produto</h5>
      </div>
    </template>
    <div>
      <label for="product-category">Categoria</label>
      <b-form-select :options="categories" text-field="name" value-field="id" id="product-category" v-model="product.category_id" />
      <label for="product-name">Nome</label>
      <b-input id="product-name" v-model="product.name"></b-input>
      <label for="product-description">Descrição</label>
      <b-input id="product-description" v-model="product.description"></b-input>
    </div>
    <div class="d-flex" slot="footer">
      <b-button class="ml-auto" @click="save()">Criar Produto</b-button>
    </div>
  </b-card>
</template>

<script>
import Api from '@/api.js'

export default {
  data: () => {
    return {
      product: {
        category_id: null,
        name: null,
        description: null,
      },
      categories: []
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      Api.get('category/all').then(({ data }) => {
        this.categories = data.categories
      })
    },
    save() {
      Api.post('product', this.product).then(({ data }) => {
        this.$bvToast.toast(data.message, { title: 'Sucesso', variant: 'success' })
      }).catch((error) => {
        this.$bvToast.toast(error.response.data.message, { title: 'Falha', variant: 'danger' })
      })
    }
  }
}
</script>

<style>

</style>
