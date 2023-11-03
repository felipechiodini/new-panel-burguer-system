import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref(null)

  function setToken(token) {
    token.value = token
  }

  return {
    setToken,
    token
  }
})
