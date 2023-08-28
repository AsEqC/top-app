import { ButtonIconProps } from "./ButtonIcon.props";
import styles from "./ButtonIcon.module.css";
import cn from "classnames";
import { UpIcon } from "@/icon-components/ButtonIcon/UpIcon";
import { CloseIcon } from "@/icon-components/ButtonIcon/CloseIcon";
import { MenuIcon } from "@/icon-components/ButtonIcon/MenuIcon";

export const ButtonIcon = ({
  appearance,
  className,
  icon,
  ...props
}: ButtonIconProps) => {
  const icons = {
    up: <UpIcon />,
    close: <CloseIcon />,
    menu: <MenuIcon />,
  };
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.white]: appearance === "white",
      })}
      {...props}
    >
      {icons[icon]}
    </button>
  );
};
