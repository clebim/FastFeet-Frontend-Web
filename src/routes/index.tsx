import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Route from './routes'

import Sign from '../pages/Sign/index'
import Dashboard from '../pages/Orders/index'
import Profile from '../pages/Couriers/index'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Sign} />
        <Route path="/couriers" isPrivate component={Profile} />
        <Route path="/orders" isPrivate component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes
