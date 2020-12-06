import React from "react";
import { Link } from "gatsby";
import styles from "../styles/PostList.module.css";

const postList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className={styles.container}>
        <h2>No Posts</h2>
      </div>
    );
  }
  return (
    <ol className={styles.posts}>
      {posts.map(post => {
        const { title, date, id } = post.node;
        return (
          <li key={id} className={styles.post}>
            <Link to={`/blog/${post.node.slug}`}>
              <h2>{title}</h2>
              <p>{date}</p>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default postList;
