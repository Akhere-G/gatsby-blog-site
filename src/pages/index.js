import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import SinglePost from "../components/singlePost";

import { graphql, useStaticQuery } from "gatsby";
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        limit: 2
      ) {
        edges {
          node {
            title
            slug
            date: publishedDate(formatString: "MMMM Do, YYYY")
            body {
              body
            }
          }
        }
      }
    }
  `);
  const latestPost = data.allContentfulBlogPost.edges[0].node;
  const previousPostSlug = data.allContentfulBlogPost.edges[1].node.slug;

  const {
    title,
    date,
    body: { body: content },
  } = latestPost;

  const options = {
    renderNode: {
      "embedded-asset-block": singlePost => {
        const alt = singlePost.data.target.fields.title["en-US"];
        const url = singlePost.data.target.fields.file["en-US"].url;
        return <img alt={alt} src={url}></img>;
      },
    },
  };
  return (
    <Layout>
      <section className='section'>
        <Head title='Blog' />
        <SinglePost
          title={title}
          date={date}
          content={content}
          options={options}
          previous={previousPostSlug}
        />
      </section>
    </Layout>
  );
};

export default BlogPage;
