import React, { useEffect } from "react";
import styles from "../styles/Pagination.module.css";
const Pagination = ({
  searchPage,
  setSearchPage,
  searchPageMax, //number of items
  itemsPerPage,
  scrollBackUp,
}) => {
  const pageMax = Math.ceil(searchPageMax / itemsPerPage);

  let scrollTop = () => {};
  if (scrollBackUp) {
    scrollTop = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 10);
    };
  }
  useEffect(() => {
    setSearchPage(1);
  }, [setSearchPage]);
  return (
    <div className={styles.pagination}>
      <div className={styles.container}>
        <button
          className={`${styles.page} ${searchPage < 2 && styles.pageNoClick}`}
          onClick={() => {
            if (searchPage > 1) {
              setSearchPage(prev => prev - 1);
              scrollTop();
            }
          }}
        >
          {"<"}
        </button>
        {searchPage > 2 && (
          <button
            className={styles.page}
            onClick={() => {
              setSearchPage(1);
              scrollTop();
            }}
          >
            1
          </button>
        )}
        {searchPage > 3 && (
          <button className={`${styles.page} ${styles.pageNoClick}`}>
            ...
          </button>
        )}
        {searchPage > 1 && (
          <button
            className={styles.page}
            onClick={() => {
              setSearchPage(prev => prev - 1);
              scrollTop();
            }}
          >
            {searchPage - 1}
          </button>
        )}
        <button className={`${styles.page} ${styles.pageActive}`}>
          {searchPage}
        </button>
        {searchPage < pageMax && (
          <button
            className={styles.page}
            onClick={() => {
              setSearchPage(prev => prev + 1);
              scrollTop();
            }}
          >
            {searchPage + 1}
          </button>
        )}
        {searchPage < pageMax - 2 && (
          <button className={`${styles.page} ${styles.pageNoClick}`}>
            ...
          </button>
        )}
        {searchPage < pageMax - 1 && (
          <button
            className={styles.page}
            onClick={() => {
              setSearchPage(pageMax);
              scrollTop();
            }}
          >
            {pageMax}
          </button>
        )}
        <button
          className={`${styles.page} ${
            searchPage > pageMax - 1 && styles.pageNoClick
          }`}
          onClick={() => {
            if (searchPage < pageMax) {
              setSearchPage(prev => prev + 1);
              scrollTop();
            }
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
