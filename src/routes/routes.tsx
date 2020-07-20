/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import AuthContext from '../Contexts/AuthContext'

interface Data {
  component: React.FC
  isPrivate?: boolean
  path: string
  exact?: boolean
}

const RouteWrapper: React.FC<Data> = ({
  component: Component,
  isPrivate = false,
  path,
  ...rest
}) => {
  const { signed } = useContext(AuthContext)

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />
  }

  return <Route {...rest} path={path} component={Component} />
}

export default RouteWrapper
