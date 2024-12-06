import { useState, useMemo } from 'react';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme, darkTheme } from '../theme/theme'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const theme = useMemo(() => 
    mode === 'light' ? lightTheme : darkTheme, 
    [mode]
  );

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout 
          mode={mode} 
          toggleTheme={toggleTheme}
        >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp;
