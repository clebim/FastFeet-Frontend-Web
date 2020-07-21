import React, { createContext, useState, useEffect } from 'react'
import api from '../services/api'

interface User {
  id: number
  name: string
  admin: number
}

interface AuthContextData {
  signed: boolean
  // eslint-disable-next-line @typescript-eslint/ban-types
  user: User | null
  signIn(email: string, password: string): Promise<void>
  signOut(): Promise<void>
}

interface Data {
  user: User
  token: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

// eslint-disable-next-line react/prop-types
export const AuthProvider: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/ban-types
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    async function loadStorage() {
      const userStorage = await localStorage.getItem('@AuthUser')
      const tokenStorage = await localStorage.getItem('@AuthToken')

      if (userStorage && tokenStorage) {
        setUser(JSON.parse(userStorage))
        api.defaults.headers.Authorization = `Bearer ${tokenStorage}`
      }
    }
    loadStorage()
  }, [])

  async function signIn(email: string, password: string) {
    const response = await api.post<Data>('/sessions', { email, password })

    const { user, token } = response.data

    api.defaults.headers.Authorization = `Bearer ${token}`
    setUser(user)

    await localStorage.setItem('@AuthUser', JSON.stringify(user))
    await localStorage.setItem('@AuthToken', token)
  }

  async function signOut() {
    await localStorage.removeItem('@AuthUser')
    await localStorage.removeItem('@AuthToken')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
