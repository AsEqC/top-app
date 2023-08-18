import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";
import cn from "classnames";
import Link from "next/link";

export const Tag = ({
  size = "s",
  children,
  className,
  color = "ghost",
  href,
  ...props
}: TagProps) => {
  return (
    <p
      className={cn(styles.tag, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <Link href={href}>{children}</Link> : <>{children}</>}
    </p>
  );
};
