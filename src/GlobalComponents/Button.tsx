/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react'
import { Button as MuiButton, ButtonProps } from '@material-ui/core'
import styled from 'styled-components'

interface Props extends ButtonProps {
  children: string
  bgColor?: string
  hoverBgColor?: string
  textColor?: string
  width?: string
  height?: string
}
const StyledButton = styled(MuiButton)`
  background-color: ${(props) => props.theme.palette[props.bgColor].main};
  color: ${(props) => props.textColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 12px;
  &:hover {
    background-color: ${(props) => props.hoverBgColor};
  }
`

StyledButton.defaultProps = {
  bgColor: 'primary',
  textColor: 'white',
  hoverBgColor: '#5753e4',
}

export default function Button({ children, ...props }: Props): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledButton {...props}>{children}</StyledButton>
}
