import Index from '@/views/Combo/Index.vue'
import Store from '@/views/Combo/Store.vue'
import Update from '@/views/Combo/Update.vue'

export default [{
    path: '/combos',
    name: 'combo.index',
    component: Index,
    label: 'Combos',
    menu: true
  },
  {
    path: '/combos/novo',
    name: 'combo.store',
    component: Store
  },
  {
    path: '/combos/:combo_id',
    name: 'combo.update',
    component: Update
  }
]
