import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import { graphql, Link } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

//variable $slug is found in context which is made in gatsby-node.js
export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date: publishedDate(formatString: "MMMM Do, YYYY")
      body {
        body
      }
    }
  }
`;
const Blog = ({ data }) => {
  const node = data.contentfulBlogPost;
  console.log(node);
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]; // node.data.target.fields.title['en-us'];
        const url = node.data.target.fields.file["en-US"].url; //node.data.target.fields.file['en-us'].url;
        return <img alt={alt} src={url}></img>;
      },
    },
  };

  return (
    <Layout>
      <section className='section'>
        <Head title={node.title} />
        <h1>{node.title}</h1>
        <p>{node.date}</p>
        {documentToReactComponents(JSON.parse(node.body.body), options)}
        <Link className='btn' to={"/search"}>
          Back
        </Link>
      </section>
    </Layout>
  );
};

export default Blog;
