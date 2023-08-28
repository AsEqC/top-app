import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: "up" | "close" | "menu";
  appearance: "primary" | "white";
}
