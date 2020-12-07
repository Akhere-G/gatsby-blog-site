import React from "react";
import { Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const singlePost = ({ title, date, content, options }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      {documentToReactComponents(JSON.parse(content), options)}
      <Link className='btn' to={"/search"}>
        Back to blog
      </Link>
    </div>
  );
};

export default singlePost;
