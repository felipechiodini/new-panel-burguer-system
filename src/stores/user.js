import { defineStore } from 'pinia'
import api from '@/api'
import router from '@/router'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: null,
      email: null,
      cellphone: null,
      token: null
    }
  },
  actions: {
    async login({ email, password }) {
      try {
        const { data } = await api.post('auth/login', { email, password })
        this.token = data.access_token
        router.push('/')
        this.getMe()
      } catch (error) {
        return error
      }
    },
    getMe() {
      api.get('auth/me').then(({ data }) => {
        this.name = data.name
        this.email = data.email
        this.cellphone = data.cellphone
      })
    },
    isAuthenticated() {
      return this.token !== null
    },
    logout() {
      try {
        api.post('auth/logout')
        localStorage.removeItem('user')
        router.push({ name: 'login' })
      } catch (error) {
        console.log(error)
      }
    }
  },
  persist: true
})
