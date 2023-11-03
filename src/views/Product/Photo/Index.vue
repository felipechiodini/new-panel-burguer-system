<template>
  <b-card>
    <div class="d-flex align-items-center" slot="header">
      <h5 class="m-0">Fotos</h5>
      <b-button class="ml-auto" variant="primary" size="sm" @click="store()">Nova Foto</b-button>
    </div>
    <div class="table-responsive">
      <table class="table border w-100">
        <tr>
          <th>Imagem</th>
          <th>Ordem</th>
        </tr>
        <tr v-for="(photo, key) in page?.data" :key="key">
          <td><b-img class="rounded" width="100%" :src="photo.src" /></td>
          <td>{{ photo.order }}</td>
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
      Api.get(`product/${this.$route.params.product_id}/photo`).then(({ data }) => {
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
