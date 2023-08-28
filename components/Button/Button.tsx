import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";
import { ArrowIcon } from "@/icon-components/ArrowIcon";
import { motion } from "framer-motion";

export const Button = ({
  appearance,
  children,
  className,
  arrow = "none",
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
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
    </motion.button>
  );
};
