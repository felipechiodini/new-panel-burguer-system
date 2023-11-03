import Index from '@/views/Banner/Index.vue'
import Store from '@/views/Banner/Store.vue'
import Update from '@/views/Banner/Update.vue'

export default [{
    path: '/banners',
    name: 'banner.index',
    component: Index,
    label: 'Banners',
    menu: true
  },
  {
    path: '/banners/novo',
    name: 'banner.store',
    component: Store
  },
  {
    path: '/banners/banner_id',
    name: 'banner.update',
    component: Update
  }
]
