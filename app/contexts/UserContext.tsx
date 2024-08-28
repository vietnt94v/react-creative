'use client'
import React, { ReactNode, useState, createContext, useContext } from 'react'
import IUser from '../models/User'

interface IUserContext {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
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
