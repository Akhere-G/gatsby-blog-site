import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import SinglePost from "../components/singlePost";
import { graphql } from "gatsby";

//variable $slug is found in context which is made in gatsby-node.js
export const query = graphql`
  query($slug: String, $previous: String, $next: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date: publishedDate(formatString: "MMMM Do, YYYY")
      body {
        body
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previous }) {
      slug
    }
    next: contentfulBlogPost(slug: { eq: $next }) {
      slug
    }
  }
`;
const Blog = ({ data }) => {
  const singlePost = data.contentfulBlogPost;
  const prevSlug = data.previous ? data.previous.slug : null;
  const nextSlug = data.next ? data.next.slug : null;

  const options = {
    renderNode: {
      "embedded-asset-block": singlePost => {
        const alt = singlePost.data.target.fields.title["en-US"];
        const url = singlePost.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url}></img>;
      },
    },
  };

  const {
    title,
    date,
    body: { body: content },
  } = singlePost;

  return (
    <Layout>
      <section className='section'>
        <Head title={title} />
        <SinglePost
          title={title}
          date={date}
          content={content}
          options={options}
          previous={prevSlug}
          next={nextSlug}
        />
      </section>
    </Layout>
  );
};

export default Blog;
