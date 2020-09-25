import styled from 'styled-components'

interface isVisible {
  visible: boolean
}

export const Container = styled.div<isVisible>`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100%;
  display: ${props => (props.visible ? 'flex' : 'none')} !important ;
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const Content = styled.div`
  display: flex;
  background-color: #fff;
  width: 450px;
  height: 230px;
  border-radius: 4px;
  flex-direction: column;
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`

export const Button = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
`
export const Problem = styled.p`
  font-size: 16;
  margin: 16px;
`
