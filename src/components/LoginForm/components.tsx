import {
  Box,
  Checkbox as MuiCheckbox,
  FormControl,
  Typography,
} from '@material-ui/core'
import styled from 'styled-components'

export const LandingWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`

export const LoginWrapper = styled(Box)`
  background-color: white;
  width: 30.25rem;
  border-radius: 12px;
  padding: 3rem 4rem;
  position: relative;
`

export const LoginText = styled(Typography)`
  font-size: 1.625rem;
  font-weight: 700;
  text-align: center;
`

export const InputsWrapper = styled(Box)`
  display: flex;
  gap: 1.75rem;
  flex-direction: column;
`

export const Form = styled(FormControl)`
  margin-top: 3rem;
`

export const Checkbox = styled(MuiCheckbox)`
  margin: 1.5rem 0;
`

export const RocketImageWrapper = styled(Box)`
  position: absolute;
  left: -3.125rem;
  top: -2.625rem;
`

export const BackgroundImage = styled(Box)`
  z-index: -1;
`
