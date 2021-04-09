import {
  Box,
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  Typography,
} from '@material-ui/core'
import styled from 'styled-components'

export const LandingWrapper = styled(Box)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`

export const RegisterLoginWrapper = styled(Box)`
  background-color: ${(props) => props.theme.palette.box.main};
  width: 30.25rem;
  border-radius: 12px;
  padding: 3rem 4rem;
  position: relative;
`

export const LoginRegisterText = styled(Typography)`
  color: ${(props) => props.theme.palette.box.secondaryText};
  font-size: 1.625rem;
  font-weight: 700;
  text-align: center;
`

export const InputsWrapper = styled(Box)<{ islogin: string }>`
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  margin-bottom: ${(props) => props.islogin === 'false' && '2rem'};
`
export const CheckboxLabel = styled(FormControlLabel)`
  color: ${({ theme }) => theme.palette.box.secondaryText};
`

export const Form = styled(FormControl)`
  margin-top: 1.5rem;
`

export const Checkbox = styled(MuiCheckbox)`
  margin: 1rem 0;
  color: ${({ theme }) => theme.palette.box.border};
`

export const RocketImageWrapper = styled(Box)`
  position: absolute;
  left: -3.125rem;
  top: -2.625rem;
`

export const BackgroundImage = styled(Box)`
  z-index: -1;
`
