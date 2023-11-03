import Index from '@/views/Product/Index.vue'
import Store from '@/views/Product/Store.vue'
import Update from '@/views/Product/Update.vue'

export default [{
    path: '/produtos',
    name: 'product.index',
    component: Index,
    label: '/Produtos',
    menu: true
  },
  {
    path: '/produtos/novo',
    name: 'product.store',
    component: Store,
  },
  {
    path: '/produto/:product_id',
    name: 'product.update',
    component: Update,
  }
]
