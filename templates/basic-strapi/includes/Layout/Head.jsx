/**
 * includes/Layout/Head.js
 */
import NextHead from 'next/head';

import { SITE_THUMBNAIL } from '@lib/Config';

const LayoutHead = () => (
  <NextHead>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Rokkitt:wght@300;400;600;700&display=swap"
      rel="stylesheet"
      defer
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/favicon/safari-pinned-tab.svg"
      color="#000000"
    />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#000" />
    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    <meta property="og:image" content={SITE_THUMBNAIL} />
  </NextHead>
);

export default LayoutHead;
