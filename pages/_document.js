import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* HTML */}
          <html lang="pt"></html>
          <meta charSet="utf-8"></meta>

          <meta name="msapplication-TileColor" content="#ffffff" />

          <meta name="theme-color" content="#ffffff" />

          {/* FONTES */}
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          {/* SCRIPTS */}
          <script src="../path/to/@themesberg/flowbite/dist/flowbite.bundle.js"></script>
          <script src="https://unpkg.com/@themesberg/flowbite@1.3.0/dist/flowbite.bundle.js"></script>

          {/* sweetalert2 */}
          <link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css" />
          <script src="sweetalert2/dist/sweetalert2.min.js"></script>
        </Head>
        <body className="scrollbar scrollbar-thin scrollbar-thumb-dark2 scrollbar-track-dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
