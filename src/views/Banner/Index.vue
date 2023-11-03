<template>
  <b-card>
    <div class="table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>Nome</th>
          <th>Imagem</th>
        </tr>
        <template v-if="loading === false">
          <tr v-for="(banner, key) in page?.data" :key="key">
            <td>{{ banner.name }}</td>
            <td><b-img class="border rounded" width="200px" :src="banner.src" /></td>
            <td class="d-flex">
              <b-button @click="goToEdit(banner)" size="sm" variant="dark">
                <i class="fas fa-edit"></i>
              </b-button>
              <b-button @click="showModalDelete(banner)" class="ml-1" size="sm" variant="danger">
                <i class="fas fa-trash"></i>
              </b-button>
            </td>
          </tr>
        </template>
      </table>
    </div>
    <div class="d-flex align-items-center" slot="footer">
      <span>Total items: {{ page.total }}</span>
      <div class="ml-auto mr-3">
        <b-form-select v-model="perPage" @change="load()">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </b-form-select>
      </div>
      <b-pagination v-model="page.current_page" :total-rows="page.total" :per-page="perPage" class="m-0" />
    </div>
  </b-card>
</template>

<script>
import Api from '@/api.js'

export default {
  name: 'Garçons',
  data: () => {
    return {
      page: null,
      loading: false,
      perPage: 10
    }
  },
  mounted() {
    this.load()
  },
  watch: {
    'page.current_page': function(newValue) {
      this.load(newValue)
    }
  },
  methods: {
    load(page = 1) {
      this.loading = true
      Api.get('banner', {
        params: {
          page,
          per_page: this.perPage
        }
      }).then(({ data }) => {
        this.page = data.page
      }).finally(() => {
        this.loading = false
      })
    },
    goToEdit(category) {
      this.$router.push({
        name: 'category.update',
        params: {
          category_id: category.id
        }
      })
    }
  }
}
</script>
