import { CardProps } from "./Card.props";
import styles from "./Card.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Card = forwardRef(
  (
    { color = "white", children, className, ...props }: CardProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(styles.card, className, {
          [styles.blue]: color === "blue",
        })}
        {...props}
      >
        {children}
      </div>
    );
  },
);
