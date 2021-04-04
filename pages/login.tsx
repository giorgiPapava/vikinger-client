import { ReactElement } from 'react'
import LoginForm from '@src/components/LoginForm'
import {
  BackgroundImage,
  LandingWrapper,
} from '@src/components/LoginForm/components'
import WelcomeScreen from '@src/components/WelcomeScreen'
import Image from 'next/image'

export default function Login(): ReactElement {
  return (
    <>
      <LandingWrapper>
        <BackgroundImage>
          <Image
            src="/landing-background.jpg"
            layout="fill"
            alt="background"
            objectFit="cover"
            objectPosition="center"
          />
        </BackgroundImage>
        <WelcomeScreen />
        <LoginForm />
      </LandingWrapper>
    </>
  )
}
