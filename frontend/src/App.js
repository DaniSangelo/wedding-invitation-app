import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#25D366', // WhatsApp green
    },
    secondary: {
      main: '#128C7E', // WhatsApp dark green
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Raleway", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    h2: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    h3: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    h4: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    h5: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    h6: {
      fontWeight: 300,
      letterSpacing: '0.1em',
    },
    body1: {
      fontWeight: 300,
      letterSpacing: '0.05em',
    },
    body2: {
      fontWeight: 300,
      letterSpacing: '0.05em',
    },
    button: {
      fontWeight: 300,
      letterSpacing: '0.1em',
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '12px 24px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
