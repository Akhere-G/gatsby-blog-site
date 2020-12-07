import React, { useState, useEffect } from "react";
import styles from "../styles/PostList.module.css";
import Pagination from "./Pagination";
import Post from "./post";

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
          return <Post {...post.node} />;
        })}
      </ol>
      <Pagination {...props} scrollBackUp={true} />
    </div>
  );
};

export default PostList;
