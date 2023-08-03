import { Noto_Sans_KR } from "next/font/google";
import { Button, Htag, P, Rating, Tag } from "@/components";
import { useState } from "react";

const notoSans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700", "500"],
});

export default function Home() {
  const [rating, setRating] = useState(4);
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
      <Rating rating={rating} setRating={setRating} isEditable />
    </div>
  );
}
