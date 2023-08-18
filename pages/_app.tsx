import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700", "500"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={notoSansKR.className}>
      <Component {...pageProps} />
    </div>
  );
}
