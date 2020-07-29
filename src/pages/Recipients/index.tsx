import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { MdCreate } from 'react-icons/md'

import api from '../../services/api'
// import Actions from '../../components/Actions/index'
import Header from '../../components/Header/index'
import {
  Container,
  Content,
  DivFormAndLink,
  Title,
  Form,
  Input,
  Search,
  TextInput,
  TableContainer
} from './styles'

interface DataRecipients {
  id: number
  name: string
  street: string
  number: number
  state: string
  city: string
}

const Recipients: React.FC = () => {
  const [recipients, setRecipients] = useState<DataRecipients[]>([])

  useEffect(() => {
    async function loadingRecipients() {
      const response = await api.get<DataRecipients[]>('/recipients')

      setRecipients(response.data)
    }

    loadingRecipients()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <Title>Gerenciando Destinatários</Title>
        <DivFormAndLink>
          <Form>
            <Input>
              <FiSearch size={28} color="#999" />
              <Search disabled placeholder="Busca por Destinatários"></Search>
            </Input>
          </Form>
          <Link to="#">
            <FiPlus size={24} color="#FFF" />
            <TextInput>CADASTRAR</TextInput>
          </Link>
        </DivFormAndLink>
        <TableContainer>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Açoẽs</th>
            </tr>
          </thead>
          <tbody>
            {recipients.map(recipient => (
              <tr key={recipient.id}>
                <td>{'#' + recipient.id}</td>
                <td>{recipient.name}</td>
                <td>
                  {recipient.street +
                    ', ' +
                    String(recipient.number) +
                    ', ' +
                    recipient.city +
                    '-' +
                    recipient.state}
                </td>
                <td>
                  <Link to="">
                    <MdCreate size={18} color="#4D85EE" />
                    Editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </Content>
    </Container>
  )
}

export default Recipients
