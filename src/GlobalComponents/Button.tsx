/* eslint-disable @typescript-eslint/indent */
/* eslint-disable react/require-default-props */
import React, { ReactElement } from 'react'
import { Button as MuiButton, ButtonProps } from '@material-ui/core'
import styled from 'styled-components'

interface Props extends ButtonProps {
  children: string
  bgcolor?: string
  textcolor?: string
  width?: string
  height?: string
}

interface T {
  bgcolor?: string
  textcolor?: string
  width?: string
  height?: string
}
const StyledButton = styled(MuiButton)<T>`
  background-color: ${(props) =>
    props.bgcolor && props.theme.palette[props.bgcolor].main};
  color: ${(props) => props.textcolor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 12px;
  &:hover {
    background-color: ${(props) =>
      props.bgcolor && props.theme.palette[props.bgcolor].hover};
  }
`

StyledButton.defaultProps = {
  bgcolor: 'primary',
  textcolor: 'white',
}

export default function Button({ children, ...props }: Props): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledButton {...props}>{children}</StyledButton>
}
