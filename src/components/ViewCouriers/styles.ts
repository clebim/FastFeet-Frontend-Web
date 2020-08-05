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
export const Date = styled.div`
  padding: 0 25px 25px 25px;

  h3 {
    padding-bottom: 10px;
    color: #444;
  }

  p {
    padding: 2px 0;
    font-size: 14px;
    color: #666;
    & span {
      color: #666;
    }
  }
`
export const Address = styled.div`
  padding: 25px;

  h3 {
    padding-bottom: 10px;
    color: #444;
  }

  span {
    display: block;
    font-size: 14px;
    color: #666;
    padding: 2px 0;
  }
`
