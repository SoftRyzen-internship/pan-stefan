import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="uk" prefix="og: https://ogp.me/ns#">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9c89b3"/>
        <meta name="msapplication-TileColor" content="#9c89b3"/>
        <meta name="theme-color" content="#9c89b3"/>
        <meta property="og:title" content="PAN STEFAN" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:image" content={'/assets/images/slider/photo6.jpg'} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta property="og:image:alt" content="Стакан капучіно та тістечко" />
        <meta property="og:description" content="Наші смаколики  - то любов" />
        <meta property="og:locale" content="uk_UA" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
