import React, { ReactElement } from 'react'
import { TextField } from '@material-ui/core'
import styled from 'styled-components'

const StyledInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 12px;
    color: ${(props) => props.theme.palette.box.secondaryText};
  }
  & .MuiInputBase-input {
    font-weight: 700;
  }
  & .MuiInputLabel-root {
    color: ${(props) => props.theme.palette.box.secondaryText};
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.box.border};
  }
`

export default function Input({ ...props }: any): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledInput {...props} />
}
