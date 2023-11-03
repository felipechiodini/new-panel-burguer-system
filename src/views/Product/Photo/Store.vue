<template>
  <div>
    <b-form-file v-model="photo" />
    <div class="d-flex" slot="footer">
      <b-button class="ml-auto" @click="save()">Criar Foto</b-button>
    </div>
  </div>
</template>

<script>
import Api from '@/api.js'

export default {
  data: () => {
    return {
      photo: null
    }
  },
  methods: {
    save() {
      const data = new FormData()
      data.append('photo', this.photo)

      Api.post(`products/${this.$route.params.product_id}/photo`, data, { headers: { 'Content-Type': 'multipart/form-data' } }).then(({ data }) => {
        this.data = data.page
      })
    }
  }

}
</script>

<style>

</style>
