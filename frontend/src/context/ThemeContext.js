import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: '#25D366', // WhatsApp green
      },
      secondary: {
        main: '#128C7E', // WhatsApp dark green
      },
      background: {
        default: mode === 'light' ? '#f5f5f5' : '#121212',
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
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
  }), [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}; 