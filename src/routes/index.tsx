import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Route from './routes'

import Sign from '../pages/Sign/index'
import Orders from '../pages/Orders/index'
import Couriers from '../pages/Couriers/index'
import Recipients from '../pages/Recipients/index'
import Problems from '../pages/Problems/index'
import Loading from '../components/Loading'
import RegisterOrder from '../pages/registerOrder/index'

const routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Sign} />
        <Route path="/" exact component={Loading} />
        <Route path="/couriers" isPrivate component={Couriers} />
        <Route path="/orders" isPrivate component={Orders} />
        <Route path="/recipients" isPrivate component={Recipients} />
        <Route path="/problems" isPrivate component={Problems} />
        <Route path="/register/order" isPrivate component={RegisterOrder} />
      </Switch>
    </BrowserRouter>
  )
}

export default routes
