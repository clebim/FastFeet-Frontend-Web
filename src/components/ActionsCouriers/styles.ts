import styled from 'styled-components'

interface isVisible {
  isActive: boolean
}

export const Button = styled.button`
  border: 0;
  position: relative;
  background: none;
`

export const Container = styled.td`
  position: relative;
`

export const Content = styled.div<isVisible>`
  position: absolute;
  display: ${props => (props.isActive ? 'flex' : 'none')} !important ;
  flex-direction: column;
  z-index: 3;
  right: -45px;
  background-color: #fff;
  min-width: 150px;
  margin-top: 5px;
  padding: 15px 10px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 11px);
    top: -8px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #f1f1f1;
  }

  a {
    font-size: 16px;
    color: #999;
    margin: 10px 15px;
    text-align: center;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`
export const ButtonAction = styled.button`
  border: 0;
  font-size: 16px;
  color: #999;
  background: none;
  text-align: center;
  border-bottom: 1px solid #eee;
  margin: 10px 15px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`
