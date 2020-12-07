import React from "react";
import styles from "../styles/SearchForm.module.css";
//import { useGlobalState } from "../context";

const SearchForm = ({ searchTerm, setSearchTerm, placeholder }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    const { value } = e.target;
    setSearchTerm(value);
  };
  return (
    <section className={styles.searchForm}>
      <form className={styles.center} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor='SearchInput'>
          Search posts
        </label>
        <input
          type='text'
          id='SearchInput'
          className={styles.searchBar}
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
    </section>
  );
};

export default SearchForm;
