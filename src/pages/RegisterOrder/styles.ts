import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  min-width: 400px;
  margin: 60px auto;
`
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Left = styled.div`
  span {
    font-size: 32px;
    font-weight: bold;
    color: #444;
  }
`
export const Right = styled.div`
  a {
    width: 100px;
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
  span {
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    margin-left: 4px;
  }
`
export const Content = styled.div`
  margin-top: 24px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 4px;
`

export const TopForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  #first {
    margin-right: 30px;
  }
  div {
    width: 100%;
    label {
      display: block;
      color: #444;
      font-size: 16px;
      font-weight: bold;
    }
    select {
      margin-top: 10px;
      width: 100%;
      height: 36px;
      border-radius: 4px;
      border-color: #ddd;
      color: #999;
      background-color: #ffffff;
      font-size: 16px;
      padding: 8px;
      option {
        font-size: 16px;
        color: #999;
        margin: 4px;
      }
    }
  }
`
export const BottomForm = styled.div`
  margin-top: 16px;
  label {
    display: block;
    color: #444;
    font-size: 16px;
    font-weight: bold;
  }
  input {
    margin-top: 10px;
    width: 100%;
    height: 36px;
    border-radius: 4px;
    border: 1px solid #ddd;
    color: #999;
    background-color: #fff;
    font-size: 16px;
    padding-left: 8px;
  }
`

export const ButtonSubmit = styled.button`
  margin-top: 10px;
  background-color: #7d40e7;
  border: 0;
  border-radius: 5px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    margin-left: 4px;
    color: #ffffff;
    font-weight: bold;
  }

  height: 32px;
`
