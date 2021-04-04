/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import {
  ThemeProvider as MuiThemeProvider,
  StylesProvider,
} from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'

class MyApp extends App {
  componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <title>Vikinger</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
              <CssBaseline />
              <Component {...pageProps} />
            </StylesProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </>
    )
  }
}

export default MyApp
