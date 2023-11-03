import Index from '@/views/Waiter/Index.vue'
import Store from '@/views/Waiter/Store.vue'
import Update from '@/views/Waiter/Update.vue'

export default [{
    path: '/garcons',
    name: 'waiter.index',
    component: Index,
    label: 'Garçons',
    menu: true
  },
  {
    path: '/garcons/novo',
    name: 'waiter.store',
    component: Store
  },
  {
    path: '/garcons/:waiter_id',
    name: 'waiter.update',
    component: Update
  }
]
