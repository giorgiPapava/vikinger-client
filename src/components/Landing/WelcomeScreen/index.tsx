import React, { ReactElement, useCallback } from 'react'
import { Box } from '@material-ui/core'

import { useAppDispatch, useAppSelector } from '@src/store'
import {
  makeLogin,
  makeRegister,
  selectLoginRegister,
} from '@src/store/loginRegisterSlice'
import {
  Description,
  PreTitle,
  StyledSwitch,
  StyledSwitchLabel,
  SwitchGroup,
  Title,
} from './components'

export default function WelcomeScreen(): ReactElement {
  const dispatch = useAppDispatch()
  const { isLogin } = useAppSelector(selectLoginRegister)

  const handleChangeSwitch = useCallback(
    (e) => {
      if (e.target.value === 'login' && !isLogin) {
        dispatch(makeLogin())
      } else if (e.target.value === 'register' && isLogin) {
        dispatch(makeRegister())
      }
    },
    [dispatch, isLogin],
  )
  return (
    <Box>
      <PreTitle variant="h2">Welcome to</PreTitle>
      <Title variant="h1">Vikinger</Title>
      <Description>
        The next generation social network & community! Connect with your
        friends and play with our quests and badges gamification system!
      </Description>
      <SwitchGroup>
        <StyledSwitchLabel
          onClick={handleChangeSwitch}
          checked={isLogin}
          value="login"
          control={<StyledSwitch />}
          label="Login"
        />
        <StyledSwitchLabel
          onClick={handleChangeSwitch}
          value="register"
          checked={!isLogin}
          control={<StyledSwitch />}
          label="Register"
        />
      </SwitchGroup>
    </Box>
  )
}
