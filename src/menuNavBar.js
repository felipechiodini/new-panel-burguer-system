import {
  mdiAccount,
  mdiCogOutline,
  mdiEmail,
  mdiLogout,
  mdiThemeLightDark,
} from '@mdi/js'

export default [
  {
    isCurrentUser: true,
    menu: [
      {
        icon: mdiAccount,
        label: 'Meu Perfil',
        to: '/perfil'
      },
      {
        icon: mdiCogOutline,
        label: 'Configurações'
      },
      {
        icon: mdiEmail,
        label: 'Mensagens'
      },
      {
        isDivider: true
      },
      {
        icon: mdiLogout,
        label: 'Sair',
        isLogout: true
      }
    ]
  },
  {
    icon: mdiThemeLightDark,
    label: 'Light/Dark',
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiLogout,
    label: 'Log out',
    isDesktopNoLabel: true,
    isLogout: true
  }
]
