import { TextareaProps } from "./Textarea.props";
import styles from "./Textarea.module.css";
import cn from "classnames";
import { ForwardedRef, forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const Textarea = forwardRef(
  (
    { className, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea
        className={cn(className, styles.textarea)}
        {...props}
        ref={ref}
      />
    );
  },
);
