<template>
  <div class="manager">
    <div class="sidebar">
      <div class="filter">
        <b-input placeholder="ID" debounce="1000" v-model="params.id" />
        <b-form-select v-model="params.status" :options="options" text-field="name" value-field="id" />
        <b-button @click="clearFilters()">Limpar</b-button>
      </div>
      <b-spinner v-if="loading === true"></b-spinner>
      <card v-else :active="selectedOrder?.id === order.id" @click.native="select(order)" :order="order" v-for="(order, key) in orders" :key="key" />
    </div>
    <manager-content :order="selectedOrder" />
  </div>
</template>

<script>
import ManagerContent from './Content.vue'
import Api from '@/api.js'

export default {
  components: {
    ManagerContent
  },
  data: () => {
    return {
      loading: false,
      orders: [],
      selectedOrder: null,
      options: [],
      params: {
        id: null,
        status: null
      }
    }
  },
  watch: {
    'params.id': function(val) {
      if (val === "") this.params.id = null
      else this.load()
    },
    'params.status': function() {
      this.load()
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    load() {
      this.loading = true
      Api.get('order-manager', { params: { ...this.params } }).then(({ data }) => {
        this.orders = data.orders
      }).finally(() => {
        this.loading = false
      })
    },
    select(order) {
      this.selectedOrder = order
    },
    clearFilters() {
      this.params.id = null
      this.params.status = null
    }
  }
}
</script>

<style scoped>

  .sidebar::-webkit-scrollbar {
    display: none;
  }

  .sidebar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    width: 30%;
    height: 100%;
    background-color: #fff;
    box-shadow: 5px 1px 5px #ccc;
    overflow-y: auto;
  }

  .manager {
    display: flex;
    height: calc(100vh - 50px);
  }

  .filter {
    display: flex;
    gap: 1rem;
    padding: 1rem;
  }

</style>

