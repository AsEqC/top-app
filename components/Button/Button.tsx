import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import { ArrowIcon } from "@/icon-components/ArrowIcon";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <ArrowIcon
          className={cn(styles.arrow, {
            [styles.down]: arrow === "down",
          })}
        />
      )}
    </button>
  );
};
