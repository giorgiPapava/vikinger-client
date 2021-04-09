import React, { ReactElement } from 'react'
import Image from 'next/image'

import Button from '@src/GlobalComponents/Button'
import Input from '@src/GlobalComponents/Input'

import { useAppSelector } from '@src/store'
import { selectLoginRegister } from '@src/store/loginRegisterSlice'

import {
  RegisterLoginWrapper,
  LoginRegisterText,
  InputsWrapper,
  Form,
  Checkbox,
  RocketImageWrapper,
  CheckboxLabel,
} from './components'

export default function RegisterLoginForm(): ReactElement {
  const { isLogin } = useAppSelector(selectLoginRegister)
  return (
    <>
      <RegisterLoginWrapper>
        <RocketImageWrapper>
          <Image src="/rocket.png" alt="rocket" width="100" height="96" />
        </RocketImageWrapper>
        <LoginRegisterText variant="h2">
          {isLogin ? 'Account Login' : 'Create your Account!'}
        </LoginRegisterText>
        <Form>
          <InputsWrapper islogin={isLogin.toString()}>
            <Input
              color="secondary"
              variant="outlined"
              label="Email"
              type="email"
            />
            {!isLogin && (
              <Input
                color="secondary"
                variant="outlined"
                label="Username"
                type="text"
              />
            )}
            <Input
              color="secondary"
              variant="outlined"
              label="Password"
              type="password"
            />
            {!isLogin && (
              <Input
                color="secondary"
                variant="outlined"
                label="Repeat Password"
                type="password"
              />
            )}
          </InputsWrapper>
          {isLogin && (
            <CheckboxLabel
              control={<Checkbox color="primary" />}
              label="Remember Me"
            />
          )}
          <Button
            width="22.25rem"
            bgcolor={isLogin ? 'secondary' : 'submitButton'}
            textcolor="white"
            height="3.375rem"
          >
            {isLogin ? 'Login To Your Account' : 'Register Now!'}
          </Button>
        </Form>
      </RegisterLoginWrapper>
    </>
  )
}
