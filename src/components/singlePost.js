import React from "react";
import { Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import styles from "../styles/SinglePost.module.css";

const SinglePost = ({ title, date, content, options, previous, next }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      {documentToReactComponents(JSON.parse(content), options)}
      <div className={styles.postBottom}>
        {previous && (
          <Link className='btn' to={`/blog/${previous}`}>
            {previous.replaceAll("-", " ")}
          </Link>
        )}
        <Link className='btn' to={"/blog"}>
          Back to blog
        </Link>
        {next && (
          <Link className='btn' to={`/blog/${next}`}>
            {next.replaceAll("-", " ")}
          </Link>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
