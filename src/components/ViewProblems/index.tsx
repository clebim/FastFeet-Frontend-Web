import React from 'react'
import { MdClose } from 'react-icons/md'

import { Container, Content, Top, Button, Problem } from './styles'

interface isVisible {
  visibleFullProblem: boolean
  handleSetVisibleFullProblem(): void
  problem: string
}

const ViewProblems: React.FC<isVisible> = ({
  visibleFullProblem,
  handleSetVisibleFullProblem,
  problem
}) => {
  return (
    <Container visible={visibleFullProblem}>
      <Content>
        <Top>
          <h3>Informações do Problema</h3>
          <Button onClick={handleSetVisibleFullProblem}>
            <MdClose size={20} color="#DE3B3B" />
          </Button>
        </Top>
        <Problem>{problem}</Problem>
      </Content>
    </Container>
  )
}

export default ViewProblems
