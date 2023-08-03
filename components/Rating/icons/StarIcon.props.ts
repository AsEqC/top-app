import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface StarIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string;
}
