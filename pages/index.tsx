import { Noto_Sans_KR } from "next/font/google";
import { Button, Htag, P, Tag } from "@/components";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700", "500"],
});

export default function Home() {
  return (
    <div className={notoSans.className}>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary" arrow="down">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P size="l">eoprepohnpitehn</P>

      <Tag size="s" color="red">
        Red
      </Tag>
      <Tag size="m" color="ghost">
        Ghost
      </Tag>
      <Tag size="m" color="green">
        Green
      </Tag>
      <Tag size="m" color="primary">
        Primary
      </Tag>
    </div>
  );
}
