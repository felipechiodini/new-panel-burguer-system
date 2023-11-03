<template>
  <b-card class="shadow mb-3">
    <div class="d-flex align-items-center" slot="header">
      <h5 class="m-0">Preços</h5>
      <b-button class="ml-auto" variant="primary" size="sm" @click="store()">Novo Preço</b-button>
    </div>
    <div class="table-responsive">
      <table class="table border w-100">
        <tr>
          <th>Preço</th>
        </tr>
        <tr v-for="(price, key) in page?.data" :key="key">
          <td>{{ price.value }}</td>
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
      Api.get(`product/${this.$route.params.product_id}/prices`).then(({ data }) => {
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
