import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Route from './routes'

import Sign from '../pages/Sign/index'
import teste from '../pages/Dashboard/index'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path="/dashboard" isPrivate component={teste} />
      <Route path="/" exact component={Sign} />
    </BrowserRouter>
  )
}

export default routes
