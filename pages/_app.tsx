import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";
import React from "react";
import ym, { YMInitializer } from "react-yandex-metrika";

const font = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700", "500"],
});
export default function App({ Component, pageProps, router }: AppProps) {
  router.events.on("routeChangeComplete", (url: string) => {
    if (typeof window !== "undefined") {
      ym("hit", url);
    }
  });

  return (
    <div className={font.className}>
      <Head>
        <title>MyTop - наш лучший топ</title>
        <link rel="preconnect" href="https://mc.yandex.ru" />
        <link rel="icon" href="/favicon.icon" />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath}
        />
        <meta property="og:locale" content="ru_RU" />
      </Head>
      <YMInitializer
        accounts={[]}
        options={{ webvisor: true, defer: true }}
        version="2"
      />
      <Component {...pageProps} />
    </div>
  );
}
