import React from 'react'
import { MdClose } from 'react-icons/md'

import { Container, Content, Date, Address, Button, Top } from './styles'

interface isVisible {
  visibleFullOrder: boolean
  handleSetVisibleFullOrder(): void
}

const ViewCouriers: React.FC<isVisible> = ({
  visibleFullOrder,
  handleSetVisibleFullOrder
}) => {
  return (
    <Container visible={visibleFullOrder}>
      <Content>
        <Address>
          <Top>
            <h3>Informações da encomenda</h3>
            <Button onClick={handleSetVisibleFullOrder}>
              <MdClose size={20} color="#DE3B3B" />
            </Button>
          </Top>
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
