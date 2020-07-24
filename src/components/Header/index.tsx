import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdLocalShipping, MdExitToApp } from 'react-icons/md'

import AuthContext from '../../Contexts/AuthContext'
import { Container, Logo, Left, Right, Options, Option, Button } from './styles'

export interface Active {
  isActive?: boolean
}

const Header: React.FC<Active> = () => {
  const { signOut } = useContext(AuthContext)

  function handleLogaut() {
    signOut()
  }

  return (
    <Container>
      <Left>
        <Logo>
          <MdLocalShipping size={32} color="7d40e7" />
          <Link to="dashboard">FASTFEET</Link>
        </Logo>
        <Options>
          <Option isActive={false}>
            <Link to="/dashboard">ENCOMENDAS</Link>
          </Option>
          <Option>
            <Link to="/dashboard">ENTREGADORES</Link>
          </Option>
          <Option>
            <Link to="/dashboard">DESTINATÁRIOS</Link>
          </Option>
          <Option>
            <Link to="/dashboard">PROBLEMAS</Link>
          </Option>
        </Options>
      </Left>
      <Right>
        <Button onClick={handleLogaut}>
          <MdExitToApp size={24} color="#666" />
          Sair
        </Button>
      </Right>
    </Container>
  )
}

export default Header
