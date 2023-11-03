<template>
  <b-card class="m-3 shadow">
    <template #header>
      <div class="d-flex align-items-center">
        <h5>Combos</h5>
        <b-button class="ml-auto" variant="primary" size="sm" to="combos/novo">Novo Combo</b-button>
      </div>
    </template>
    <div class="table-responsive">
      <table class="table w-100 border">
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
        <tr v-for="(combo, key) in combos" :key="key">
          <td>{{ combo.name }}</td>
          <td>{{ combo.description }}</td>
          <td class="d-flex">
            <b-button size="sm" variant="dark"><i class="fas fa-edit"></i></b-button>
            <b-button @click="showModalDelete()" class="ml-1" size="sm" variant="danger"><i class="fas fa-trash"></i></b-button>
          </td>
        </tr>
      </table>
    </div>
    <!-- <modal-delete name="combo" :path="`combo/${selectedCombo?.id}`"></modal-delete> -->
  </b-card>
</template>

<script>
// import ModalDelete from '@/components/ModalDelete.vue'

export default {
  // components: {
  //   ModalDelete
  // },
  data: () => {
    return {
      combos: [
        { id: 1, name: 'Combo 1' },
        { id: 1, name: 'Combo 1' },
        { id: 1, name: 'Combo 1' },
        { id: 1, name: 'Combo 1' },
        { id: 1, name: 'Combo 1' },
        { id: 1, name: 'Combo 1' },
        { id: 1, name: 'Combo 1' },
      ],
      selectedCombo: null
    }
  },
  methods: {
    showModalDelete(combo) {
      this.selectedCombo = combo
      this.$bvModal.show('modal-delete')
    }
  }
}
</script>

<style>

</style>
