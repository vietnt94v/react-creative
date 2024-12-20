'use client'
import React, { ChangeEvent, FormEvent, use, useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import CryptoJS from 'crypto-js'
import Const from '../const'
import Backdrop from '../components/backdrop'
import IUser from '../models/User'
import { useUser } from '../contexts/UserContext'

interface LoginData {
  username: string
  password: string
}

const secretKeyToken = Const.crypto_secret_key || ''

const Login = () => {
  const router = useRouter()
  const userContext = useUser()
  const [disabledSubmit, setDisabledSubmit] = useState(false)
  const [loading, setLoading] = useState(false)
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
    setLoading(true)
    setDisabledSubmit(true)
    try {
      const { data } = await axios.post(
        `${Const.api_endpoint}/auth/login`,
        loginData,
      )
      const {
        token,
        refreshToken,
        id,
        username,
        email,
        firstName,
        lastName,
        gender,
        image,
      } = data
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

      if (userContext && userContext.setUser) {
        const userData: IUser = {
          id: id,
          username: username,
          email: email,
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          image: image,
        }
        userContext.setUser(userData)
      }

      if (encryptedToken) {
        router.push('/')
      }
    } catch (error) {
      console.error('Login failed:', error)
    } finally {
      setLoading(false)
      setDisabledSubmit(false)
    }
  }

  return (
    <>
      {loading && <Backdrop />}
      <div className='h-screen flex justify-center items-baseline pt-64'>
        <form
          className='border p-5 space-y-5 rounded shadow-lg bg-slate-100'
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
            <button type='submit' disabled={disabledSubmit}>
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
