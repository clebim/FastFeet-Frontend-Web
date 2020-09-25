import React from 'react'
import { Link } from 'react-router-dom'
import { MdDone, MdKeyboardArrowLeft } from 'react-icons/md'

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
  return (
    <>
      <Header />
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
              <input type="text"></input>
              <ButtonSubmit>
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
