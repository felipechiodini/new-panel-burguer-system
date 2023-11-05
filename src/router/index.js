import { createRouter, createWebHistory } from 'vue-router'
import Style from '@/views/StyleView.vue'
// import Home from '@/views/HomeView.vue'
import UserRouters from '@/router/modules/user.js'
import PhotoRouters from '@/router/modules/photo.js'
import CategoryRouters from '@/router/modules/category.js'
import CardRouters from '@/router/modules/card.js'
import WaiterRouters from '@/router/modules/waiter.js'
import BannerRouters from '@/router/modules/banner.js'
import ComboRouters from '@/router/modules/combo.js'
import ProductRouters from '@/router/modules/product.js'
import OrderRouters from '@/router/modules/order.js'
import GeneralRouters from '@/router/modules/general.js'
import CustomerRouters from '@/router/modules/customer.js'

const routes = [
  ...GeneralRouters,
  ...CustomerRouters,
  ...UserRouters,
  ...CategoryRouters,
  ...CardRouters,
  ...WaiterRouters,
  ...BannerRouters,
  ...PhotoRouters,
  ...ProductRouters,
  ...ComboRouters,
  ...OrderRouters,
  {
    meta: {
      title: 'Select style'
    },
    path: '/',
    name: 'style',
    component: Style
  },
  {
    meta: {
      title: 'Usuários'
    },
    path: '/tables',
    name: 'tables',
    component: () => import('@/views/TablesView.vue')
  },
  {
    meta: {
      title: 'Forms'
    },
    path: '/forms',
    name: 'forms',
    component: () => import('@/views/FormsView.vue')
  },
  {
    path: '/perfil',
    name: 'profile',
    component: () => import('@/views/ProfileView.vue'),
    meta: {
      title: 'Profile'
    },
  },
  {
    meta: {
      title: 'Ui'
    },
    path: '/ui',
    name: 'ui',
    component: () => import('@/views/UiView.vue')
  },
  {
    meta: {
      title: 'Responsive layout'
    },
    path: '/responsive',
    name: 'responsive',
    component: () => import('@/views/ResponsiveView.vue')
  },
  {
    meta: {
      title: 'Login'
    },
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  },
  {
    meta: {
      title: 'Error'
    },
    path: '/error',
    name: 'error',
    component: () => import('@/views/ErrorView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
