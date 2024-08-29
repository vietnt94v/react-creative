'use client'
import React, { ReactNode, useState, createContext, useContext } from 'react'
import IUser from '../models/User'

interface IUserContext {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

const UserContext = createContext<IUserContext | null>(null)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    </>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
