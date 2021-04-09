import { ReactElement } from 'react'
import Image from 'next/image'

import RegisterLoginForm from '@src/components/Landing/RegisterLoginForm'
import {
  BackgroundImage,
  LandingWrapper,
} from '@src/components/Landing/RegisterLoginForm/components'
import WelcomeScreen from '@src/components/Landing/WelcomeScreen'
import { useAppSelector } from '@src/store'
import { selectTheme } from '@src/store/themeSlice'

export default function Login(): ReactElement {
  const { currentTheme } = useAppSelector(selectTheme)

  return (
    <>
      <LandingWrapper>
        <BackgroundImage>
          <Image
            src={
              currentTheme === 'main'
                ? '/landing-background.jpg'
                : '/landing-background-dark.jpg'
            }
            layout="fill"
            alt="background"
            objectFit="cover"
            objectPosition="center"
          />
        </BackgroundImage>
        <WelcomeScreen />
        <RegisterLoginForm />
      </LandingWrapper>
    </>
  )
}
