<template>
  <b-card class="m-3 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Usuários</h5>
        <b-button class="ml-auto" variant="primary" size="sm" to="usuario/novo">Novo Usuário</b-button>
      </div>
    </template>
    <div class="table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>Nome</th>
        </tr>
        <tr v-for="(user, key) in page?.data" :key="key">
          <td>{{ user.name }}</td>
          <td class="d-flex">
            <b-button size="sm" variant="dark"><i class="fas fa-edit"></i></b-button>
            <b-button @click="showModalDelete()" class="ml-1" size="sm" variant="danger"><i class="fas fa-trash"></i></b-button>
          </td>
        </tr>
      </table>
    </div>
    <modal-delete name="combo" :path="`combo/${selectedCombo?.id}`"></modal-delete>
  </b-card>
</template>

<script>
import ModalDelete from '@/components/ModalDelete.vue'
import Api from '@/api.js'

export default {
  components: {
    ModalDelete
  },
  data: () => {
    return {
      page: null,
      selectedCombo: null
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      Api.get('user').then(({ data }) => {
        this.page = data.page
      }).catch(() => {
        this.error = true
      }).finally(() => {
        this.loading = false
      })
    },
  }
}
</script>

<style>

</style>
