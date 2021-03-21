import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
    fontFamily: `Rajdhani, sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    primary: {
      main: '#6EC1E4',
    },
    secondary: {
      main: '#615dfa',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f8f8fb',
    },
  },
})

export default theme
