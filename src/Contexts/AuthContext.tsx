import React, { createContext, useState } from 'react'
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

  async function signIn(email: string, password: string) {
    const response = await api.post<Data>('/sessions', { email, password })

    const { user, token } = response.data

    api.defaults.headers.Authorization = `Bearer ${token}`

    setUser(user)
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
