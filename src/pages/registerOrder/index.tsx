import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'

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

const registerOrder: React.FC = () => {
  const [recipient, setRecipient] = useState('')
  const [deliveryman, setDeliveryman] = useState('')
  const [productName, setProductName] = useState('')

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
          <form>
            <TopForm>
              <div id="first">
                <label>Destinatário</label>
                <select>
                  <option>teste</option>
                  <option>teste</option>
                  <option>teste</option>
                  <option>teste</option>
                </select>
              </div>
              <div>
                <label>Entregador</label>
                <select>
                  <option>teste</option>
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

export default registerOrder
