import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >

      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-95MDFTMREQ" />
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag()
              {dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', G-95MDFTMREQ, {
                page_path: window.location.pathname,
             });
            `,
        }}
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <body>

        <Main />
        <NextScript />
      </body>
    </Html >
  )
}
