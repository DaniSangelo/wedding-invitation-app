import React from 'react';
import { CssBaseline } from '@mui/material';
import Home from './pages/Home';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <ThemeToggle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
