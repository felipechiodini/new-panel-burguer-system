import Index from '@/views/User/Index.vue'
import Store from '@/views/User/Store.vue'
import Update from '@/views/User/Update.vue'

export default [{
    path: '/usuarios',
    name: 'user.index',
    component: Index,
    label: 'Usuários',
    menu: true
  },
  {
    path: '/usuarios/novo',
    name: 'user.store',
    component: Store,
  },
  {
    path: '/usuarios/:product_id',
    name: 'user.update',
    component: Update,
  }
]
