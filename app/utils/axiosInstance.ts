import axios from 'axios'
import Const from '../const'
import CryptoJS from 'crypto-js'

const secretKeyToken = Const.crypto_secret_key || ''

const axiosInstance = axios.create({
  baseURL: Const.api_endpoint,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(config => {
  const encryptedToken = localStorage.getItem('token')
  if (encryptedToken) {
    const token = CryptoJS.AES.decrypt(encryptedToken, secretKeyToken).toString(
      CryptoJS.enc.Utf8,
    )
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

const refreshToken = async () => {
  const encryptedRefreshToken = localStorage.getItem('refreshToken')
  if (!encryptedRefreshToken) throw new Error('No refresh token found')

  const refreshToken = CryptoJS.AES.decrypt(
    encryptedRefreshToken,
    secretKeyToken,
  ).toString(CryptoJS.enc.Utf8)

  try {
    const { data } = await axiosInstance.post('/auth/refresh', { refreshToken })
    const { token, refreshToken: newRefreshToken } = data

    const encryptedToken = CryptoJS.AES.encrypt(
      token,
      secretKeyToken,
    ).toString()
    const encryptedRefreshToken = CryptoJS.AES.encrypt(
      newRefreshToken,
      secretKeyToken,
    ).toString()

    localStorage.setItem('token', encryptedToken)
    localStorage.setItem('refreshToken', encryptedRefreshToken)

    return token
  } catch (error) {
    console.error('Error refreshing token:', error)
    throw error
  }
}

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const { response, config } = error
    if (response?.status === 401) {
      try {
        const newAccessToken = await refreshToken()
        config.headers.Authorization = `Bearer ${newAccessToken}`
        return axiosInstance(config) // retry the original request
      } catch (error) {
        console.error('Failed to refresh token', error)
        throw error
      }
    }

    return Promise.reject(error)
  },
)

export default axiosInstance
