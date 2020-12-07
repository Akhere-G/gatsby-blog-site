import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styles from "../styles/Header.module.css";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);
  return (
    <header className={styles.header}>
      <div className={styles.headerCenter}>
        <h1>
          <Link className={styles.title} to='/'>
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
                to='/'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
                to='/about'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
                to='/search'
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                className={styles.navItem}
                activeClassName={styles.activeNavItem}
                to='/contact'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
