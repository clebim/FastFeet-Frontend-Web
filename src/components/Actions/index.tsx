import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MdMoreHoriz,
  MdVisibility,
  MdCreate,
  MdDeleteForever
} from 'react-icons/md'

import { Button, Container, Content, ButtonAction } from './styles'

export interface isVisible {
  isActive?: boolean
}

const Actions: React.FC<isVisible> = () => {
  const [visible, setVisible] = useState(false)

  function handleActive() {
    setVisible(!visible)
  }

  return (
    <Container>
      <Button onClick={handleActive}>
        <MdMoreHoriz size={22} color="#666" />
      </Button>

      <Content isActive={visible}>
        <Link to="">
          <MdVisibility size={18} color="#8E5BE8" />
          Visualizar
        </Link>
        <Link to="">
          <MdCreate size={18} color="#4D85EE" />
          Editar
        </Link>
        <ButtonAction>
          <MdDeleteForever size={18} color="#DE3B3B" />
          Excluir
        </ButtonAction>
      </Content>
    </Container>
  )
}

export default Actions
