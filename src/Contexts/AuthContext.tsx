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
  loading: boolean
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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function loadStorage() {
      setLoading(true)

      const userStorage = localStorage.getItem('@AuthUser')
      const tokenStorage = localStorage.getItem('@AuthToken')

      if (userStorage && tokenStorage) {
        setUser(JSON.parse(userStorage))
        api.defaults.headers.Authorization = `Bearer ${tokenStorage}`
      }
      setLoading(false)
    }
    loadStorage()
  }, [])

  async function signIn(email: string, password: string) {
    const response = await api.post<Data>('/sessions', { email, password })

    const { user, token } = response.data

    api.defaults.headers.Authorization = `Bearer ${token}`
    setUser(user)

    localStorage.setItem('@AuthUser', JSON.stringify(user))
    localStorage.setItem('@AuthToken', token)
  }

  async function signOut() {
    localStorage.removeItem('@AuthUser')
    localStorage.removeItem('@AuthToken')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
