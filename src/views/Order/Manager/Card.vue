<template>
  <div class="order" :class="{ 'active': active }">
    <div class="header">
      <span>{{ order.customer.name }}</span>
      <span>#{{ order.id }}</span>
      <span>{{ order.created_at }}</span>
      <span class="badge">{{ translateDelivery(order.delivery.type) }}</span>
    </div>
    <span>status: {{ translateStatus(order.status).name }}</span>
  </div>
</template>

<script>
  export default {
    name: 'manager-side-bar',
    props: {
      order: {
        type: Object
      },
      active: {
        type: Boolean,
        default: false
      }
    }
  }

</script>

<style scoped>

  .sidebar .order {
    display: flex;
    background-color: #fff;
    flex-direction: column;
    border-top: 1px solid #ccc;
    cursor: pointer;
    padding: 1rem;
  }

  .sidebar .order:last-child {
    border-bottom: 1px solid #ccc;
  }

  .sidebar .order.active {
    background-color: #e2e2e2;
  }

  .sidebar .order:hover {
    background-color: #f1f1f1;
  }

  .sidebar .order .header * {
    margin-right: 1rem;
  }


  .badge {
    border: none;
    border-radius: 25px;
    padding: 5px 10px;
    font-size: .8rem;
    background-color: var(--primary);
    color: #fff;
    font-weight: bold;
  }

</style>
