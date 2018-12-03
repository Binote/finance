import axios from 'axios'
const instance = axios.create()

instance.interceptors.response.use((response) => {
  return Promise.resolve(response.data)
}, (err) => {
  return Promise.reject(err.response.data)
})

// const baseUrl = 'http://192.168.1.43:8888/FHADMINM'
const baseUrl = 'http://47.105.196.63/admin'

export const api = baseUrl + '/appuser/register'

export const ajax = instance
