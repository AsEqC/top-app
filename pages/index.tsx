import { Noto_Sans_KR } from "next/font/google";
import { Button, Htag } from "@/components";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700", "500"],
});

export default function Home() {
  return (
    <div className={notoSans.className}>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
    </div>
  );
}
