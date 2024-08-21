'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Const from '../const'
import CryptoJS from 'crypto-js'

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
    console.log('event.target: ', event)
    const { name, value } = event.target
    setLoginData(prev => ({ ...prev, [name]: value }))
  }

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault()
    try {
      const res = await axios.post(
        `${Const.api_endpoint}/auth/login`,
        loginData,
      )
      const token = res.data.token
      const encyptedToken = CryptoJS.AES.encrypt(
        token,
        secretKeyToken,
      ).toString()
      localStorage.setItem('token', encyptedToken)

      if (encyptedToken) {
        router.push('/')
      }
    } catch (error) {
      console.error('error: ', error)
    }
  }

  return (
    <>
      <form className='p-5 space-y-2'>
        <div className='flex align-baseline space-x-2'>
          <label>user name</label>
          <input
            type='text'
            name='username'
            value={loginData.username}
            onChange={handleChangeInput}
          />
        </div>
        <div className='flex space-x-2'>
          <label>password</label>
          <input
            type='password'
            name='password'
            value={loginData.password}
            onChange={handleChangeInput}
          />
        </div>
        <div className='block'>
          <button onClick={handleLogin}>Login</button>
        </div>
      </form>
    </>
  )
}

export default Login
