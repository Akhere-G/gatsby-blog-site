import React from "react";
import { Link } from "gatsby";
import styles from "../styles/PostList.module.css";

const Post = ({ id, title, date, slug }) => {
  return (
    <li key={id} className={styles.post}>
      <Link to={`/blog/${slug}`}>
        <h2>{title}</h2>
        <p>{date}</p>
      </Link>
    </li>
  );
};

export default Post;
