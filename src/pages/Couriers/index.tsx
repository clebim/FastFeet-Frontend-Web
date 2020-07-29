import React, { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'

import api from '../../services/api'
import {
  Container,
  Content,
  Title,
  Form,
  Input,
  Search,
  Button,
  TextInput,
  TableContainer
} from './styles'
import Header from '../../components/Header/index'
import Actions from '../../components/Actions/index'

interface DataCouriers {
  id: number
  avatar_url: string
  name: string
  email: string
}

const Couriers: React.FC = () => {
  const [couriers, setCouriers] = useState<DataCouriers[]>([])

  useEffect(() => {
    async function loadCouriers() {
      const response = await api.get<DataCouriers[]>('/couriers')
      setCouriers(response.data)
      console.log(response.data)
    }
    loadCouriers()
  }, [])

  async function handleDelete(id: number): Promise<void> {
    await api.delete(`couriers/${id}`)
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>Gerenciando Entregadores</Title>
        <Form>
          <Input>
            <FiSearch size={28} color="#999" />
            <Search disabled placeholder="Busca por entregadores"></Search>
          </Input>
          <Button>
            <FiPlus size={24} color="#FFF" />
            <TextInput>CADASTRAR</TextInput>
          </Button>
        </Form>
        <TableContainer>
          <thead>
            <th>Id</th>
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Açoes</th>
          </thead>
          <tbody>
            {couriers.map(courier => (
              <tr key={courier.id}>
                <td>{'#' + courier.id}</td>
                <td>
                  <a id="linkfoto" href={courier.avatar_url} target="blank">
                    {courier.name.split(' ').map(string => {
                      return string.charAt(0)
                    })}
                  </a>
                </td>
                <td>{courier.name}</td>
                <td>{courier.email}</td>
                <Actions id={courier.id} handleDelete={handleDelete} />
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </Content>
    </Container>
  )
}

export default Couriers
