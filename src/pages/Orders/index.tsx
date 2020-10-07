import React, { useEffect, useState } from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import api from '../../services/api'
import { SetStatus } from '../../utils/SetStatus'
import Header from '../../components/Header/index'
import Actions from '../../components/ActionsOrders/index'
import Status from '../../components/StatusOrder/index'

import ViewCouriers from '../../components/ViewCouriers/index'
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

export interface Orders {
  id: number
  // eslint-disable-next-line camelcase
  start_date: Date | null
  end_date: Date | null
  canceled_at: Date | null
  name_courier: string
  name_recipient: string
  city: string
  state: string
}

const Dashboard: React.FC = () => {
  const [orders, setOrders] = useState<Orders[]>([])
  const [visibleFullOrder, setVisibleFullOrder] = useState(false)

  useEffect(() => {
    async function loadOrders(): Promise<void> {
      const response = await api.get<Orders[]>('/orders')
      setOrders(response.data)
    }

    loadOrders()
  }, [])

  async function handleDelete(id: number): Promise<void> {
    await api.delete(`orders/${id}`)

    setOrders(orders.filter(order => order.id !== id))
  }

  function handleSetVisibleFullOrder(): void {
    setVisibleFullOrder(!visibleFullOrder)
  }

  return (
    <>
      <Container>
        <ViewCouriers
          visibleFullOrder={visibleFullOrder}
          handleSetVisibleFullOrder={handleSetVisibleFullOrder}
        />
        <Header />
        <Content>
          <Title>Gerenciando Encomendas</Title>
          <DivFormAndLink>
            <Form>
              <Input>
                <FiSearch size={28} color="#999" />
                <Search disabled placeholder="Busca por encomendas"></Search>
              </Input>
            </Form>
            <Link to="/register/order">
              <FiPlus size={24} color="#FFF" />
              <TextInput>CADASTRAR</TextInput>
            </Link>
          </DivFormAndLink>
          <TableContainer>
            <thead>
              <tr>
                <th>ID</th>
                <th>Destinatário</th>
                <th>Entregador</th>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id}>
                  <td>{'#' + order.id}</td>
                  <td>{order.name_recipient}</td>
                  <td>{order.name_courier}</td>
                  <td>{order.city}</td>
                  <td>{order.state}</td>
                  <td>
                    <Status
                      status={SetStatus(
                        order.start_date,
                        order.end_date,
                        order.canceled_at
                      )}
                    ></Status>
                  </td>

                  <Actions
                    id={order.id}
                    handleDelete={handleDelete}
                    handleSetVisible={handleSetVisibleFullOrder}
                    visibleFullOrder={visibleFullOrder}
                  />
                </tr>
              ))}
            </tbody>
          </TableContainer>
        </Content>
      </Container>
    </>
  )
}

export default Dashboard
