/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import {
  RouteProps as ReactRouterProps,
  Redirect,
  Route as ReactDomRoute
} from 'react-router-dom'
import AuthContext from '../Contexts/AuthContext'

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

  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/orders" />
  }

  return <ReactDomRoute {...rest} render={() => <Component />} />
}

export default RouteWrapper
