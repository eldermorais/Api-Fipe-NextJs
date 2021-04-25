import { Global } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Global />
    </>
  );
}

export default MyApp;
