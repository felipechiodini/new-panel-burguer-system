import Axios from 'axios'
// import { useUserStore } from './stores/user'

// const userStore = useUserStore()

const service = Axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

service.interceptors.request.use(config => {
  // if (userStore.token !== null) {
  //   config.headers.Authorization = 'Bearer ' + userStore.token
  // }

  return config
}, function (error) {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  return response
}, function (error) {
  // if (error.response.status === 401) {
  //   localStorage.clear()
  //   Router.push({ name: 'auth.login' })
  // }

  // if (error.response.status === 503) {
  //   Router.push({ name: 'maintenance' })
  // }

  return Promise.reject(error)
})

export default service
