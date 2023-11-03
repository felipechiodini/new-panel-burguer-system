import Home from '@/views/Home/IndexView.vue'
// import Configuration from '@/views/Configuration.vue'
// import Store from '@/views/Store/Store.vue'
// import Profile from '@/views/Profile.vue'
// import Warning from '@/views/Configuration/Warning.vue'

export default [{
    path: '/',
    name: 'home',
    component: Home,
    label: 'Home',
    menu: true
  },
  // {
  //   path: '/configuracoes',
  //   name: 'store.config',
  //   component: Configuration,
  //   label: 'Configurações',
  //   menu: true
  // },
  // {
  //   path: '/perfil',
  //   name: 'user.profile',
  //   component: Profile,
  //   label: 'Perfil',
  //   menu: true
  // },
  // {
  //   path: 'nova-loja',
  //   name: 'store.create',
  //   component: Store
  // },
  // {
  //   path: 'configuracao/aviso',
  //   name: 'configuration.warning',
  //   component: Warning
  // }
]
