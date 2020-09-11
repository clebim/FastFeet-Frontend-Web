import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  justify-content: space-between;
  background-color: #fff;
`
export const Logo = styled.div`
  display: flex;
  margin: 0 20px;
  font-size: 26px;
  text-align: center;
  a {
    margin-left: 15px;
    text-decoration: none;
    color: #7d40e7;
  }
`

export const Left = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`

export const Options = styled.ul`
  list-style: none;
  margin-left: 60px;
  display: flex;
  flex-direction: row;
`

export const Option = styled.li`
  margin: 0 10px;
  a {
    font-weight: bold;
    color: #999;

    transition: color 0.2s;

    :hover {
      color: #444;
    }
  }
`
export const Right = styled.div``
export const Button = styled.button`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  color: #444;
  background: #fff;
  border: 0;
  :hover {
    color: #de3b3b;
  }
`
