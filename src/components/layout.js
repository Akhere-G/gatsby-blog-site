import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.css";
import styles from "../styles/Layout.module.css";
const Layout = ({ children }) => {
  return (
    <div className={styles.hero}>
      <Header />
      <main className={styles.container}>
        <div className={styles.center}>{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
