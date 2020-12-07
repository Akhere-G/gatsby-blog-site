import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styles from "../styles/PostList.module.css";
import Pagination from "./Pagination";

const PostList = ({ posts }) => {
  const [searchPage, setSearchPage] = useState(1);
  const [searchedPosts, setSearchedPosts] = useState(posts);

  const searchPageMax = posts.length;
  const itemsPerPage = 4;
  const startOfPage = itemsPerPage * (searchPage - 1);
  const endOfPage = itemsPerPage * searchPage;

  const props = { searchPage, setSearchPage, searchPageMax, itemsPerPage };

  useEffect(() => {
    setSearchedPosts([...posts].slice(startOfPage, endOfPage));
  }, [searchPage, searchPageMax, posts, endOfPage, startOfPage]);

  if (!posts || posts.length === 0) {
    return (
      <div className={styles.container}>
        <h2>No Posts</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Pagination {...props} />
      <ol className={styles.posts}>
        {searchedPosts.map(post => {
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
      <Pagination {...props} scrollBackUp={true} />
    </div>
  );
};

export default PostList;
