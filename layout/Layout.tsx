import { LayoutProps } from "./Layout.props";
import { Sidebar } from "./Sidebar/Sidebar";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { FC } from "react";
import styles from "./Layout.module.css";
import {
  AppContext,
  AppContextProvider,
  IAppContext,
} from "@/context/app.context";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <div>
        <Sidebar className={styles.sidebar} />
        <div className={styles.body}>{children}</div>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FC<T>,
) => {
  return function ComponentWithLayout(props: T) {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
