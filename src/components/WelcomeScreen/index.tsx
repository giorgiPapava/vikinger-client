import React, { ReactElement } from 'react'
import { Box } from '@material-ui/core'
import {
  Description,
  PreTitle,
  StyledSwitch,
  StyledSwitchLabel,
  SwitchGroup,
  Title,
} from './components'

export default function WelcomeScreen(): ReactElement {
  return (
    <Box>
      <PreTitle variant='h2'>Welcome to</PreTitle>
      <Title variant='h1'>Vikinger</Title>
      <Description>
        The next generation social network & community! Connect with your
        friends and play with our quests and badges gamification system!
      </Description>
      <SwitchGroup>
        <StyledSwitchLabel
          value='login'
          checked={true}
          control={<StyledSwitch />}
          label='Login'
        />
        <StyledSwitchLabel
          value='register'
          control={<StyledSwitch />}
          label='Register'
        />
      </SwitchGroup>
    </Box>
  )
}
