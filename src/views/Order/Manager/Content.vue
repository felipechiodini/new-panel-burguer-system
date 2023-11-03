<template>
  <div style="flex:1;">
    <div class="order-information" v-if="order">

      <div class="header">
        <h6 class="customer-name">{{ order.customer.name }}</h6>
        <span class="order-number">#{{ order.id }}</span>
        <span class="badge ml-2">{{ translateDelivery(order.delivery.type) }}</span>
      </div>

      <div class="box">
        <span class="d-block">{{ order.delivery.address.street }}, {{ order.delivery.address.number }} - {{ order.delivery.address.complement }} - {{ order.delivery.address.city }}</span>
        <span>Realizado às: {{ '18:00' }}</span>
        <span class="ml-2">Previsão entrega: 18:45</span>
      </div>

      <div class="box p-3">
        <div class="item pb-2" v-for="(item, key) in order.items" :key="key">
          <div class="title">
            <span>{{ item.amount }}x</span>
            <span class="ml-2">{{ item.product.name }}</span>
            <span class="ml-auto">{{ currency(item.value) }}</span>
          </div>
          <div class="doawdopwafw" v-if="item.additionals.length">
            <h6>Addicionais</h6>
            <div class="additional" v-for="(additional, key) in item.additionals" :key="key">
              <span>{{ additional.amount }}x</span>
              <span class="ml-2">{{ additional.additional.name }}</span>
              <span class="ml-auto">{{ currency(additional.value) }}</span>
            </div>
          </div>
          <div class="doawdopwafw" v-if="item.replacements.length">
            <h6>Substituições</h6>
            <div class="additional" v-for="(replacement, key) in item.replacements" :key="key">
              <span>{{ replacement.replacement.name }}</span>
              <span class="ml-auto">{{ currency(replacement.value) }}</span>
            </div>
          </div>
          <span v-if="item.observation" class="observation">{{ item.observation }}</span>
        </div>
        <div>
          <table class="w-100">
            <tr>
              <td>Total</td>
              <td class="text-right">{{ currency(2000) }}</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="footer">
        <b-button class="ml-auto">Cancelar</b-button>
        <b-button class="ml-3" @click="dwaaw()">Confirmar</b-button>
      </div>
    </div>
    <div class="empty" v-else>
      <i class="fas fa-arrow-left text-primary"></i>
      <h6>Selecione um pedido</h6>
    </div>
  </div>
</template>

<script>
export default {
  name: 'manager-content',
  props: {
    order: {
      type: Object
    }
  },
  methods: {
    //
  }
}

</script>

<style scoped>

  .order-information {
    padding: 1rem 2rem;
  }

  .order-information .header {
    display: flex;
    align-items: baseline;
    line-height: normal;
    margin-bottom: .5rem;
  }

  .order-information .header .customer-name {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .order-information .header .order-number {
    font-size: 1rem;
    margin-left: 1rem;
  }

  .order-information .box {
    border: 1px solid #ccc;
    background-color: #fff;
    padding: .5rem;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  .box .item {
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
  }

  .box .item .doawdopwafw {
    margin-left: 1rem;
  }

  .box .item .doawdopwafw h6 {
    font-weight: bold;
    font-size: .7rem;
  }

  .box .item .title {
    display: flex;
  }

  .box .item .observation {
    background-color: #ccc;
    padding: .3rem;
    border-radius: 10px;
    margin-left: 1rem;
    font-size: .8rem;
  }

  .footer {
    display: flex;
  }

  .badge {
    border-radius: 10px;
    background-color: var(--primary);
    padding: 5px;
    color: #fff;
    font-weight: normal;
  }

  .empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 1rem;
  }

  .empty i {
    font-size: 2rem;
  }

  .additional {
    display: flex;
  }

</style>
