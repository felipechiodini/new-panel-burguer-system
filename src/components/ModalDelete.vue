<template>
  <b-modal id="modal-delete" size="sm" centered :title="`Deletar ${name}`">
    <div class="row justify-content-center">
      <div class="col-auto text-center">
        <i class="fas fa-exclamation-triangle fa-3x text-danger"></i>
        <h4 class="heading mt-4">ATENÇÃO!</h4>
        <p>Você tem certeza de que deseja excluir este(a) {{ name }}?</p>
      </div>
    </div>
    <div slot="modal-footer">
      <b-button @click="destroy()" :disabled="loading === true" variant="dark">
        <b-spinner small v-if="loading === true" /> Deletar
      </b-button>
    </div>
  </b-modal>
</template>

<script>
import Api from '@/api.js'

export default {
  props: {
    name: {
      // type: String
    },
    path: {
      type: String
    }
  },
  data: () => {
    return {
      loading: false
    }
  },
  methods: {
    destroy() {
      this.setLoading(true)
      Api.delete(this.path).then(({ data }) => {
        this.$bvToast.toast(data.message, { title: 'Sucesso', variant: 'success' })
        this.$bvModal.hide('modal-delete')
        this.$emit('success')
      }).catch((error) => {
        this.$bvToast.toast(error.data.message, { title: 'Erro', variant: 'danger' })
      }).finally(() => {
        this.setLoading(false)
      })
    },
    setLoading(value) {
      this.loading = value
    }
  }
}
</script>
