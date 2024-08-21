import axios from 'axios'
import Const from '../const'
import CryptoJS from 'crypto-js'

const secretKeyToken = Const.crypto_key || ''

const axiosInstance = axios.create({
  baseURL: Const.api_endpoint,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

const refreshAccessToken = async () => {
  try {
    const res = await axios.post(`${Const.api_endpoint}/auth/refresh-token`)
    const token = res.data.token
    const encyptedToken = CryptoJS.AES.encrypt(token, secretKeyToken).toString()
    localStorage.setItem('token', encyptedToken)
    return token
  } catch (error) {
    console.error('Error: ', error)
    throw error
  }
}

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
