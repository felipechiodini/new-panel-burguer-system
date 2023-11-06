import Index from '@/views/Customer/Index.vue'
import Store from '@/views/Customer/Store.vue'
// import Update from '@/views/Customer/Update.vue'

export default [{
    path: '/clientes',
    name: 'customer.index',
    component: Index,
    meta: {
      label: 'Clientes',
      menu: true
    }
  },
  {
    path: '/clientes/novo',
    name: 'customer.store',
    component: Store
  },
  // {
  //   path: '/clientes/:card_id',
  //   name: 'customer.update',
  //   component: Update
  // }
]
