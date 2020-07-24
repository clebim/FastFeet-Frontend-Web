import styled from 'styled-components'

import { DefineBackground, DefineColor } from '../../utils/DefineColors'

import { Status } from '.'

export const Container = styled.div<Status>`
  background-color: ${props => DefineBackground(props.status)};
  width: 120px;
  text-align: center;
  border-radius: 10px;
  color: ${props => DefineColor(props.status)};

  svg {
    margin-right: 10px;
    color: ${props => DefineColor(props.status)};
  }
`
