/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components'
import {
  Typography,
  Switch,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core'

export const PreTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
  text-align: center;
`

export const Title = styled(Typography)`
  font-size: 6.5rem;
  font-weight: 900;
  text-transform: uppercase;
  font-family: Titillium Web, sans-serif;
  color: white;
  text-align: center;
`

export const Description = styled(Typography)`
  color: white;
  width: 380px;
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
  margin: 0 auto;
`

export const SwitchGroup = styled(FormGroup)`
  flex-direction: row;
  margin: 2rem auto;
  justify-content: center;
`

export const StyledSwitchLabel = styled(FormControlLabel)`
  width: 11.25rem;
  height: 3.375rem;
  border: ${(props) => `1px solid ${props.theme.palette.box.main}`};
  margin: 0;
  background: ${({ checked, theme }) =>
    checked ? theme.palette.box.main : 'transparent'};

  & .MuiFormControlLabel-label {
    font-weight: 700;
    text-align: center;
    width: 100%;
    color: ${({ checked, theme }) =>
      checked ? theme.palette.box.secondaryText : theme.palette.box.text};
  }

  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`

export const StyledSwitch = styled(Switch)`
  display: none;
  visibility: hidden;
  opacity: 0;
  position: absolute;
  left: -9999px;
`
