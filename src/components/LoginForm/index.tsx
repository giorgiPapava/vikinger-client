import React, { ReactElement } from 'react'
import Image from 'next/image'
import { FormControlLabel } from '@material-ui/core'
import Button from '@src/GlobalComponents/Button'
import Input from '@src/GlobalComponents/Input'
import {
  LoginWrapper,
  LoginText,
  InputsWrapper,
  Form,
  Checkbox,
  RocketImageWrapper,
} from './components'

export default function LoginForm(): ReactElement {
  return (
    <>
      <LoginWrapper>
        <RocketImageWrapper>
          <Image src="/rocket.png" alt="rocket" width="100" height="96" />
        </RocketImageWrapper>
        <LoginText variant="h2">Account Login</LoginText>
        <Form>
          <InputsWrapper>
            <Input
              color="secondary"
              variant="outlined"
              label="Email"
              type="email"
            />
            <Input
              color="secondary"
              variant="outlined"
              label="Password"
              type="password"
            />
          </InputsWrapper>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember Me"
          />
          <Button
            width="22.25rem"
            bgColor="secondary"
            textColor="white"
            height="3.375rem"
          >
            Login To Your Account
          </Button>
        </Form>
      </LoginWrapper>
    </>
  )
}
