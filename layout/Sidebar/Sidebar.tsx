import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";
import React from "react";
import { Logo } from "@/layout/icons/logo-icon";
import cn from "classnames";
export const Sidebar = ({ className, ...props }: SidebarProps) => {
  return (
    <div className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
