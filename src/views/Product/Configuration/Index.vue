<template>
  <b-card>
    <template #header>
      <div class="d-flex align-items-center">
        <h5 class="m-0">Configuração</h5>
      </div>
    </template>
    <div>
      <label for="max_number_additionals">aaaaa</label>
      <b-input id="max_number_additionals" type="text" v-model="configuration.max_number_additionals" />
      <label for="max_number_replacements">aaaaa</label>
      <b-input id="max_number_replacements" type="text" v-model="configuration.max_number_replacements" />
      <label for="store_product_id">aaaaa</label>
      <b-input id="store_product_id" type="text" v-model="configuration.store_product_id" />
      <label for="unit_type">aaaaa</label>
      <b-input id="unit_type" type="text" v-model="configuration.unit_type" />
    </div>
    <template #footer>
      <b-button class="d-flex ml-auto" size="sm" variant="primary" @click="save()">Salvar</b-button>
    </template>
  </b-card>
</template>

<script>
import Api from '@/api.js'

export default {
  data: () => {
    return {
      configuration: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      Api.get(`product/${this.$route.params.product_id}/configuration`).then(({ data }) => {
        this.configuration = data.configuration
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
