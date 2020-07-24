import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Route from './routes'

import Sign from '../pages/Sign/index'
import Dashboard from '../pages/Orders/index'
import Profile from '../pages/Profile/index'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Sign} />
      <Route path="/profile" isPrivate component={Profile} />
      <Route path="/dashboard" isPrivate component={Dashboard} />
    </BrowserRouter>
  )
}

export default routes
