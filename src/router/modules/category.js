import Index from '@/views/Category/IndexView.vue'
import Store from '@/views/Category/StoreView.vue'
import Update from '@/views/Category/UpdateView.vue'

export default [{
    path: '/categorias',
    name: 'category.index',
    component: Index,
    label: 'Categorias',
    menu: true
  },
  {
    path: '/categoria/novo',
    name: 'category.store',
    component: Store
  },
  {
    path: '/categoria/:category_id',
    name: 'category.update',
    component: Update
  }
]
