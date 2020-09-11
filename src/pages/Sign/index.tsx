import React, { useState, FormEvent, useContext } from 'react'
import { MdLocalShipping } from 'react-icons/md'

import AuthContext from '../../Contexts/AuthContext'
import { Container, Form, Input, Button, Label, Content, Logo } from './styles'

const Sign: React.FC = () => {
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin(event: FormEvent) {
    event.preventDefault()
    signIn(email, password)
  }

  return (
    <Container>
      <Content>
        <Logo>
          <MdLocalShipping color="7d40e7" size="40" />
          <p>FASTFEET</p>
        </Logo>
        <Form onSubmit={handleLogin}>
          <Label>Seu E-mail</Label>
          <Input
            placeholder="exemplo@gmail.com"
            type="email"
            value={email}
            name="email"
            onChange={e => setEmail(e.target.value)}
          />
          <Label>Sua Senha</Label>
          <Input
            placeholder="**********"
            type="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">Entrar no sistema</Button>
        </Form>
      </Content>
    </Container>
  )
}
export default Sign
