import React, { FormEvent, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import * as Yup from 'yup'

import api from '../../services/api'
import { Recipients, Couriers } from './interfaces'

import {
  Container,
  Top,
  Left,
  Right,
  Content,
  TopForm,
  BottomForm,
  ButtonSubmit
} from './styles'
import Header from '../../components/Header/index'

const RegisterOrder: React.FC = () => {
  const [recipients, setRecipients] = useState<string[]>([])
  const [couriers, setCouriers] = useState<string[]>([])
  const [recipient, setRecipient] = useState('')
  const [deliveryman, setDeliveryman] = useState('')
  const [productName, setProductName] = useState('')
  const history = useHistory()

  useEffect(() => {
    async function getRecipients() {
      try {
        const response = await api.get<Recipients>('/recipients/list')

        if (response.status === 200) {
          setRecipients(response.data.recipients)
        } else {
          toast.error('Erro ao buscar destinatários')
        }
      } catch (error) {
        console.log(error)
      }
    }

    getRecipients()
  }, [])

  useEffect(() => {
    async function getCouriers() {
      try {
        const response = await api.get<Couriers>('/couriers/list')

        if (response.status === 200) {
          setCouriers(response.data.couriers)
        } else {
          toast.error('Erro ao buscar entregadores')
        }
      } catch (error) {
        console.log(error)
      }
    }

    getCouriers()
  }, [])

  async function handleCreateOrder(event: FormEvent) {
    event.preventDefault()

    const schema = Yup.object().shape({
      recipient: Yup.string().required(),
      deliveryman: Yup.string().required(),
      product: Yup.string().required()
    })

    try {
      const data = {
        recipient: recipient,
        deliveryman: deliveryman,
        product: productName
      }

      if (await schema.validate(data)) {
        const response = await api.post('/orders', data)

        if (response.status === 200) {
          history.push('/orders')
        } else {
          toast.error('Erro ao cadastrar Encomenda')
        }
      } else {
        toast.error('Entrada de dados inválida')
      }
    } catch (error) {
      console.log(error)
      toast.error('Erro ao cadastrar encomenda')
    }
  }

  return (
    <>
      <Header />
      <ToastContainer />
      <Container>
        <Top>
          <Left>
            <span>Cadastro de Encomendas</span>
          </Left>
          <Right>
            <Link to="/orders">
              <MdKeyboardArrowLeft size={24} color="#FFFFFF" />
              <span>VOLTAR</span>
            </Link>
          </Right>
        </Top>
        <Content>
          <form onSubmit={handleCreateOrder}>
            <TopForm>
              <div id="first">
                <label>Entregador</label>
                <select
                  placeholder="Selecione um entregador"
                  onChange={e => setDeliveryman(e.target.value)}
                >
                  {couriers.map(courier => {
                    return <option key={courier}>{courier}</option>
                  })}
                </select>
              </div>
              <div>
                <label>Destinatário</label>
                <select
                  placeholder="Selecione um destinatário"
                  onChange={e => setRecipient(e.target.value)}
                >
                  {recipients.map(recipient => {
                    return <option key={recipient}>{recipient}</option>
                  })}
                </select>
              </div>
            </TopForm>
            <BottomForm>
              <label>Nome do Produto</label>
              <input
                type="text"
                onChange={e => setProductName(e.target.value)}
              ></input>
              <ButtonSubmit type="submit">
                <MdDone size={20} color="#FFFFFF" />
                <span>SALVAR</span>
              </ButtonSubmit>
            </BottomForm>
          </form>
        </Content>
      </Container>
    </>
  )
}

export default RegisterOrder
