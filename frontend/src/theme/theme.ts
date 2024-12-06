import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Ubuntu',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontFamily: 'Ubuntu, Roboto, Arial, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Ubuntu, Roboto, Arial, sans-serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Ubuntu, Roboto, Arial, sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: 'Ubuntu, Roboto, Arial, sans-serif',
    },
    body2: {
      fontFamily: 'Ubuntu, Roboto, Arial, sans-serif',
    },
  },
  palette: {
    primary: {
      main: '#3f51b5', // Material Blue
      light: '#7986cb',
      dark: '#303f9f',
    },
    secondary: {
      main: '#f50057', // Material Pink
      light: '#ff4081',
      dark: '#c51162',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');
      `,
    },
  },
});

export default theme;
