import styled from 'styled-components'

export const Container = styled.div`
  background-color: #f5f5f5;
`
export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export const Title = styled.h1`
  font-size: 32px;
  color: #444;
  margin: 35px 0;
`
export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`
export const Input = styled.div`
  display: flex;
  align-items: center;
`

export const Search = styled.input`
  width: 280px;
  height: 32px;
  border: 0;
  border-radius: 4px;
  margin-left: 8px;
  padding: 2px 5px;
  border: 1px solid #999;
  ::placeholder {
    color: #999;
  }
`
export const DivFormAndLink = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    width: 140px;
    height: 32px;
    color: #fff;
    background-color: #7d40e7;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const TextInput = styled.p`
  font-weight: bold;
  color: #fff;
  margin-left: 2px;
`
export const TableContainer = styled.table`
  max-width: 1200px;
  margin: 0 auto;
  border-collapse: separate;
  border-spacing: 0 20px;

  thead th {
    width: 250px;
    text-align: initial;
    color: #444;
    font-size: 16px;
    &:first-child {
      width: 100px;
      padding: 0 10px;
    }
    &:last-child {
      text-align: end;
      padding: 0 10px;
    }
  }

  tbody td {
    width: 250px;
    text-align: initial;
    border-radius: 4px;
    background: #fff;
    height: 50px;
    color: #666666;
    font-size: 16px;
    border-radius: 4px;

    #linkfoto {
      color: #7d40e7;
    }

    &:first-child {
      width: 100px;
      padding: 0 10px;
    }
    &:last-child {
      text-align: end;
      padding-right: 20px;
    }
  }
`
