import React, { useContext } from 'react'

import AuthContext from '../../Contexts/AuthContext'
// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext)
  const name = user?.name

  return <h1>{name}</h1>
}

export default Dashboard
