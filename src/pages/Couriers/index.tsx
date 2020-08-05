import React, { useState, useEffect } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import api from '../../services/api'
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
import Header from '../../components/Header/index'
import ActionsCouriers from '../../components/ActionsCouriers/index'

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

    setCouriers(couriers.filter(courier => courier.id !== id))
  }

  return (
    <Container>
      <Header />
      <Content>
        <Title>Gerenciando Entregadores</Title>
        <DivFormAndLink>
          <Form>
            <Input>
              <FiSearch size={28} color="#999" />
              <Search disabled placeholder="Busca por entregadores"></Search>
            </Input>
          </Form>
          <Link to="#">
            <FiPlus size={24} color="#FFF" />
            <TextInput>CADASTRAR</TextInput>
          </Link>
        </DivFormAndLink>
        <TableContainer>
          <thead>
            <th>ID</th>
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
                      return string.charAt(0).toUpperCase()
                    })}
                  </a>
                </td>
                <td>{courier.name}</td>
                <td>{courier.email}</td>
                <ActionsCouriers id={courier.id} handleDelete={handleDelete} />
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </Content>
    </Container>
  )
}

export default Couriers
