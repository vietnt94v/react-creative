'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import axiosInstance from '../utils/axiosInstance'
import CryptoJS from 'crypto-js'
import Const from '../const'

interface LoginData {
  username: string
  password: string
}

const secretKeyToken = Const.crypto_key || ''

const Login = () => {
  const router = useRouter()
  const [loginData, setLoginData] = useState<LoginData>({
    username: 'emilys',
    password: 'emilyspass',
  })

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setLoginData(prev => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const { data } = await axiosInstance.post('/auth/login', loginData)
      const { token, refreshToken } = data

      const encryptedToken = CryptoJS.AES.encrypt(
        token,
        secretKeyToken,
      ).toString()
      const encryptedRefreshToken = CryptoJS.AES.encrypt(
        refreshToken,
        secretKeyToken,
      ).toString()

      localStorage.setItem('token', encryptedToken)
      localStorage.setItem('refreshToken', encryptedRefreshToken)

      if (token) {
        router.push('/')
      }
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div className='h-screen flex justify-center items-baseline pt-64'>
      <form
        className='border p-5 space-y-5 rounded shadow-lg'
        onSubmit={handleLogin}
      >
        <div className='grid grid-cols-12'>
          <label htmlFor='username' className='col-span-4'>
            User Name
          </label>
          <input
            id='username'
            className='col-span-8'
            type='text'
            name='username'
            value={loginData.username}
            onChange={handleChangeInput}
          />
        </div>
        <div className='grid grid-cols-12'>
          <label htmlFor='password' className='col-span-4'>
            Password
          </label>
          <input
            id='password'
            className='col-span-8'
            type='password'
            name='password'
            value={loginData.password}
            onChange={handleChangeInput}
          />
        </div>
        <div className='text-center'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
