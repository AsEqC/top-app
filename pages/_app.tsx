import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";
import React from "react";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700", "500"],
});
export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <div className={notoSansKR.className}>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link rel="icon" href="/favicon.icon" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
