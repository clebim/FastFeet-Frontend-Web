import React from 'react'
import { FiPlus, FiSearch } from 'react-icons/fi'

import Header from '../../components/Header/index'
import Actions from '../../components/Actions/index'
import Status from '../../components/StatusOrder/index'

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

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Content>
          <Title>Gerenciando encomendas</Title>
          <Form>
            <Input>
              <FiSearch size={28} color="#999" />
              <Search disabled placeholder="Busca por encomendas"></Search>
            </Input>
            <Button>
              <FiPlus size={24} color="#FFF" />
              <TextInput>CADASTRAR</TextInput>
            </Button>
          </Form>
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
              <tr>
                <td>01</td>
                <td>Panificado Ceifer</td>
                <td>Matheus</td>
                <td>Uberlandia</td>
                <td>Minas gerais</td>
                <td>
                  <Status status="Pendente"></Status>
                </td>

                <Actions />
              </tr>
              <tr>
                <td>01</td>
                <td>Panificado Ceifer</td>
                <td>Matheus</td>
                <td>Uberlandia</td>
                <td>Minas gerais</td>
                <td>
                  <Status status="Entregue"></Status>
                </td>

                <Actions />
              </tr>
            </tbody>
          </TableContainer>
        </Content>
      </Container>
    </>
  )
}

export default Dashboard
