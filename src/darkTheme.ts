import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  themeType: 'dark',
  palette: {
    primary: {
      main: '#40d04f',
    },
    secondary: {
      main: '#7750f8',
      hover: '#9668ff',
    },
    box: {
      main: '#1d2333',
      border: '#3f485f',
      text: '#3e3f5e',
      secondaryText: '#ffffff',
    },
    submitButton: {
      main: '#40d04f',
      hover: '#4ae95b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f8f8fb',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
} as ThemeOptions)

export default theme
