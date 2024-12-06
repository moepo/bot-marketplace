import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Custom color palette
const COLORS = {
  light: {
    primary: '#1976d2',
    background: '#ffffff',
    paper: '#f5f5f5',
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  dark: {
    primary: '#0d47a1', // Much darker blue
    background: '#0a0a0a', // Very dark background
    body: '#080808', // Even darker body background
    paper: '#121212', // Dark grey background
    surface: '#1e1e1e', // Slightly lighter surface
    headerBackground: '#0d1a2b', // Dark blue tone for header
    text: {
      primary: 'rgba(255, 255, 255, 0.95)', // Brighter white
      secondary: 'rgba(255, 255, 255, 0.75)', // Slightly brighter secondary
    },
  },
};

// Create a theme with custom palette and typography
const getTheme = (mode: 'light' | 'dark') => {
  const colors = mode === 'light' ? COLORS.light : COLORS.dark;

  return responsiveFontSizes(createTheme({
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 600,
      h1: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 600,
        color: colors.text.primary,
      },
      h2: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 600,
        color: colors.text.primary,
      },
      h6: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
      },
      body1: {
        fontFamily: '"Inter", sans-serif',
        color: colors.text.primary,
      },
      body2: {
        fontFamily: '"Inter", sans-serif',
        color: colors.text.secondary,
      },
      button: {
        fontFamily: '"Inter", sans-serif',
        fontWeight: 500,
        textTransform: 'none',
      },
    },
    palette: {
      mode,
      primary: {
        main: colors.primary,
        light: mode === 'light' ? '#42a5f5' : '#1e88e5', // Darker light variant
        dark: mode === 'light' ? '#1565c0' : '#0d47a1', // Very dark blue
      },
      background: {
        default: mode === 'light' ? colors.background : colors.body,
        paper: mode === 'light' ? colors.paper : colors.surface,
      },
      text: {
        primary: colors.text.primary,
        secondary: colors.text.secondary,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          body {
            background-color: ${mode === 'light' ? colors.background : colors.body};
          }
        `,
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? colors.paper : colors.headerBackground,
            color: colors.text.primary,
            boxShadow: mode === 'dark' ? '0 1px 0 0 rgba(255,255,255,0.1)' : 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: colors.text.primary,
          },
          contained: {
            backgroundColor: colors.primary,
            color: 'white',
            '&:hover': {
              backgroundColor: mode === 'dark' ? '#1565c0' : '#1976d2',
            },
          },
          outlined: {
            borderColor: mode === 'dark' ? 'rgba(255,255,255,0.23)' : undefined,
            color: colors.text.primary,
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
  }));
};

export const lightTheme = getTheme('light');
export const darkTheme = getTheme('dark');

export default lightTheme;
