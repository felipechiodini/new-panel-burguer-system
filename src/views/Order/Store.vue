<template>
  <div>

    <b-card title="Cliente">
      <label for="">Nome</label>
      <b-input v-model="customer.name" type="text"></b-input>
      <label for="">Telefone</label>
      <b-input v-model="customer.cellphone"></b-input>
    </b-card>

    <b-card title="Produtos">
      <table class="table">
        <tr>
          <th>Quantidade</th>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
        <tr v-for="(product, key) in products" :key="key">
          <td>{{ product.quantity }}}</td>
          <td>{{ product.name }}}</td>
          <td>{{ product.value }}}</td>
        </tr>
      </table>

      <div>
        <select name="" id="">
          <option value="percent">Porcentagem</option>
          <option value="unit">Valor</option>
        </select>

        <input v-model="discount.value" type="text">
        <span>Total {{ orderValue }}</span>
      </div>
    </b-card>

    <b-card>
      <b-form-checkbox v-model="payment.id">Pix</b-form-checkbox>
      <b-form-checkbox v-model="payment.id">Cartão de Crédito</b-form-checkbox>
    </b-card>



  </div>
</template>

<script>
export default {

  data:() => {
    return {
      customer: {
        name: null,
        cellphone: null
      },
      payment: {
        id: null
      },
      discount: {
        value: null
      },
      products: []
    }
  },
  computed: {
    orderValue() {
      return 20
    }
  }

}
</script>

<style>

</style>
