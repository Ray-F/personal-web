import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name={'viewport'} content={'initial-scale=1.0'} />
      </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}

export default MyApp;
