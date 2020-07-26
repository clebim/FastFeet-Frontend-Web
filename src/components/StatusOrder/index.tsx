import React from 'react'
import { FiCircle } from 'react-icons/fi'

import { Container } from './styles'

export interface Status {
  status?: string
}

// eslint-disable-next-line react/prop-types
const StatusOrder: React.FC<Status> = ({ status }) => {
  return (
    <Container status={status}>
      <FiCircle />
      {status}
    </Container>
  )
}

export default StatusOrder
