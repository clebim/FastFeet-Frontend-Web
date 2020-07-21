import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import AuthContext from '../../Contexts/AuthContext'
// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useContext(AuthContext)

  function teste() {
    signOut()
  }

  return (
    <form onSubmit={teste}>
      <button type="submit">teste</button>
    </form>
  )
}

export default Dashboard
