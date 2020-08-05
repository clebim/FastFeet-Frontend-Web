import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdLocalShipping, MdExitToApp } from 'react-icons/md'

import AuthContext from '../../Contexts/AuthContext'
import { Container, Logo, Left, Right, Options, Option, Button } from './styles'

const Header: React.FC = () => {
  const { signOut } = useContext(AuthContext)

  function handleLogaut() {
    signOut()
  }

  return (
    <Container>
      <Left>
        <Logo>
          <MdLocalShipping size={32} color="#7d40e7" />
          <Link to="orders">FASTFEET</Link>
        </Logo>
        <Options>
          <Option>
            <Link to="/orders">ENCOMENDAS</Link>
          </Option>
          <Option>
            <Link to="/couriers">ENTREGADORES</Link>
          </Option>
          <Option>
            <Link to="/recipients">DESTINATÁRIOS</Link>
          </Option>
          <Option>
            <Link to="/problems">PROBLEMAS</Link>
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
