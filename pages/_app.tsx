import { useMediaQuery } from '@mui/material';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { Theme, ThemeProvider } from '@mui/material/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { darkTheme, lightTheme } from '../src/theme';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={prefersDarkMode ? darkTheme : lightTheme} >
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
function useState(lightTheme: Theme): [any, any] {
  throw new Error('Function not implemented.');
}

