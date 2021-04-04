import React, { ReactElement } from 'react'
import { TextField, TextFieldProps } from '@material-ui/core'
import styled from 'styled-components'

const StyledInput = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 12px;
  }
  & .MuiInputBase-input {
    font-weight: 700;
  }
`

export default function Input({ ...props }: TextFieldProps): ReactElement {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <StyledInput {...props} />
}
