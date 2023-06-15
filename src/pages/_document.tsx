import { SeoTags } from '@/components/SeoTags'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <SeoTags
          description="Get the latest real-time currency exchange rates for Brazilian Real (BRL) on our website. We provide accurate, up-to-date data for various currencies around the world."
          title="Real-time currency exchange rates for Brazilian Real | Current Quotes"
          image="https://github.com/eucarlos.png"
          keywords={[
            "Currency exchange",
            "Brazilian Real",
            "Exchange rates",
            "Currency converter",
            "Financial data"
          ]}
        />
        <meta name="theme-color" content="#36393E" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Catamaran:wght@400;500;700&family=Roboto+Mono:wght@500&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
