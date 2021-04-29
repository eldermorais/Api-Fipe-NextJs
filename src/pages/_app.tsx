import { Global } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <Global />
    </ThemeProvider>
  );
}

export default MyApp;
