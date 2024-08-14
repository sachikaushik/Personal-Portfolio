import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="Sachi Kaushik - MERN/MEAN stack developer" />
          <meta name="description" content="Sachi Kaushik." />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sachi Kaushik - MERN/MEAN stack developer" />
          <meta property="og:description" content="Sachi Kaushik." />
          <meta property="og:image" content="" />
          <meta property="twitter:card" content="" />
          <meta property="twitter:title" content="Sachi Kaushik - MERN/MEAN stack developer" />
          <meta property="twitter:description" content="Sachi Kaushik." />
          <meta property="twitter:image" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
