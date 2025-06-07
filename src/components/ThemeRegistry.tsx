'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const storedMode = localStorage.getItem('themeMode') as 'light' | 'dark' | null;
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedMode) {
      setMode(storedMode);
    } else if (prefersDarkMode) {
      setMode('dark');
    }
    // Ensure this effect runs only once on mount
  }, []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: { main: '#1976d2' }, 
                secondary: { main: '#dc004e' }, 
                background: {
                  default: '#ffffff',
                  paper: '#f5f5f5',
                },
              }
            : {
                // palette values for dark mode
                primary: { main: '#90caf9' }, 
                secondary: { main: '#f48fb1' }, 
                background: {
                  default: '#121212',
                  paper: '#1e1e1e',
                },
              }),
        },
        typography: {
          fontFamily: inter.style.fontFamily,
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              colorPrimary: {
                backgroundColor: mode === 'light' ? '#1976d2' : '#1e1e1e',
              },
            },
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
