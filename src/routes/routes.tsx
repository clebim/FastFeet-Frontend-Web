/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import {
  RouteProps as ReactRouterProps,
  Redirect,
  Route as ReactDomRoute
} from 'react-router-dom'
import AuthContext from '../Contexts/AuthContext'
// import Loading from '../components/Loading/index'

interface RouterProps extends ReactRouterProps {
  isPrivate?: boolean
  component: React.ComponentType
}

const RouteWrapper: React.FC<RouterProps> = ({
  component: Component,
  isPrivate = false,
  ...rest
}) => {
  const { signed } = useContext(AuthContext)

  if (rest.path === '/') {
    return <Redirect to="/login" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/orders" />
  }

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  return <ReactDomRoute {...rest} render={() => <Component />} />
}

export default RouteWrapper
