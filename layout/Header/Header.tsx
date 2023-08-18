import { HeaderProps } from "./Header.props";
import styles from "@/layout/Header/Header.module.css";
export const Header = ({ ...props }: HeaderProps) => {
  return <div {...props}>Header</div>;
};
