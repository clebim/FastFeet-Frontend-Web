import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { MdMoreHoriz, MdCreate, MdDeleteForever } from 'react-icons/md'

import { Button, Container, Content, ButtonAction } from './styles'

interface ActionProps {
  id: number
  handleDelete(id: number): Promise<void>
}
const Actions: React.FC<ActionProps> = ({ id, handleDelete }) => {
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
          <MdCreate size={18} color="#4D85EE" />
          Editar
        </Link>
        <ButtonAction onClick={() => handleDelete(id)}>
          <MdDeleteForever size={18} color="#DE3B3B" />
          Excluir
        </ButtonAction>
      </Content>
    </Container>
  )
}

export default Actions
