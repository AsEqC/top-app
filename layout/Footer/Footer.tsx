import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import cn from "classnames";
import { format } from "date-fns";
import Link from "next/link";

export const Footer = ({ className, ...props }: FooterProps) => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены
      </div>
      <Link href="#" target="_blank">
        Пользовательское соглашение
      </Link>
      <Link href="#" target="_blank">
        Политика конфиденциальности
      </Link>
    </footer>
  );
};
