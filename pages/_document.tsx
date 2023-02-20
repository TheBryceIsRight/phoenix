import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      </Head>
      {process.env.NODE_ENV === "production" ?
        <div>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-95MDFTMREQ"></Script>
          <Script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', ${process.env.GTAG_CODE}, {
                    page_path: window.location.pathname,
                 });
                `,
            }}
          />
        </div>
        :
        ""
      }
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
