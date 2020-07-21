import React, { useContext } from 'react'

// import { Container } from './styles';
import Auth from '../../Contexts/AuthContext'

const Profile: React.FC = () => {
  const { user } = useContext(Auth)
  const name = user?.name
  return <h1>{name}</h1>
}

export default Profile
