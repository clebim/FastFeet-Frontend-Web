import React from 'react'

import { Container, Content, Date, Address } from './styles'

interface isVisible {
  visibleFullOrder: boolean
}

const ViewCouriers: React.FC<isVisible> = ({ visibleFullOrder }) => {
  return (
    <Container visible={visibleFullOrder}>
      <Content>
        <Address>
          <h3>Informações da encomenda</h3>
          <span>Rua das rosas, 730</span>
          <span>Uberlandia, Mg</span>
          <span>38412-134</span>
        </Address>
        <Date>
          <h3>Datas</h3>
          <p>
            Retirada: <span>25/01/2020</span>
          </p>
          <p>
            Entrega: <span>25/01/2020</span>
          </p>
        </Date>
      </Content>
    </Container>
  )
}

export default ViewCouriers
