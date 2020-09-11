import React from 'react'

import Routes from './routes/index'
import { AuthProvider } from './Contexts/AuthContext'
import GlobalStyles from './styles/GlobalStyles'

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyles />
    </AuthProvider>
  )
}

export default App
