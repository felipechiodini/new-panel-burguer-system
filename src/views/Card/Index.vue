<template>
  <div class="container my-4">
    <h5 class="mb-4">Garçons</h5>
    <b-button class="py-1 px-2" variant="primary"><b-icon icon="plus"></b-icon> Novo Garçom</b-button>
    <div class="row align-items-center shadow m-3 border rounded p-1 py-2" v-for="(waiter, key) in page.data" :key="key">
      <div class="col-3">
        <h3>{{ waiter.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Api from '@/api.js'

export default {
  name: 'Garçons',
  data: () => {
    return {
      page: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    async load() {
      try {
        const { data } = await Api.get('/waiter')
        this.page = data
      } catch (error) {

      }
    }
  }
}
</script>

<style scoped>

  .image {
    object-fit: cover;
  }

</style>
