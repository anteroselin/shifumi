import { PropsWithChildren } from "react";
import { Header } from "../Header";

import styles from "./Layout.module.css";

const Layout = (props: PropsWithChildren<{}>) => {
  return (
    <div className={styles.root}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
