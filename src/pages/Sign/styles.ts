import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  background-color: #7d40e7;
  display: flex;
  font-family: 'Grenze Gotisch', cursive;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  background: #fff;
  border-radius: 4px;
`
export const Logo = styled.h1`
  margin: 50px 0;
  color: #7d40e7;
  font-size: 32px;
  display: flex;
  justify-content: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  border: 0;
`
export const Input = styled.input`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
  height: 45px;
  padding: 0 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  &::placeholder {
    color: #999;
  }
`
export const Label = styled.label`
  color: #444444;
  font-weight: bold;
`
export const Button = styled.button`
  border: 0;
  border-radius: 4px;
  color: #fff;
  background: #7d40e7;
  height: 45px;
  margin-bottom: 60px;
`
