import Theme from '../styles/theme';
import Head from 'next/head'
import "../pages/global.css"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sachi Kaushik - MERN/MEAN Stack Developer</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
