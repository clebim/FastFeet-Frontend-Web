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

interface Delivery {
  delivery_id: number
  description: string
}

const Problems: React.FC = () => {
  const [problems, setProblems] = useState<Delivery[]>([])

  async function handleDelete(id: number): Promise<void> {
    api.delete(`delivery/${id}/cancel_problem`)

    setProblems(problems.filter(problem => problem.delivery_id !== id))
  }

  useEffect(() => {
    async function LoadingProblems() {
      const response = await api.get<Delivery[]>('delivery/problems')
      setProblems(response.data)
    }

    LoadingProblems()
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        <Title>Gerenciando Problemas</Title>
        <DivFormAndLink>
          <Form>
            <Input>
              <FiSearch size={28} color="#999" />
              <Search disabled placeholder="Busca por problemas"></Search>
            </Input>
          </Form>
          <Link to="#">
            <FiPlus size={24} color="#FFF" />
            <TextInput>CADASTRAR</TextInput>
          </Link>
        </DivFormAndLink>
        <TableContainer>
          <thead>
            <th>Encomenda</th>
            <th>Problema</th>
            <th>Açoẽs</th>
          </thead>
          <tbody>
            {problems.map(problem => (
              <tr key={problem.delivery_id}>
                <td>{problem.delivery_id}</td>
                <td>{problem.description}</td>
                <ActionsCouriers
                  id={problem.delivery_id}
                  handleDelete={handleDelete}
                />
              </tr>
            ))}
          </tbody>
        </TableContainer>
      </Content>
    </Container>
  )
}

export default Problems
