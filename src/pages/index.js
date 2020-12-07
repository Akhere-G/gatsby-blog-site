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
        limit: 1
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
      <section className='sectionPlain'>
        <Head title='Blog' />
        <h1>Blog</h1>
        <SinglePost
          title={title}
          date={date}
          content={content}
          options={options}
        />
      </section>
    </Layout>
  );
};

export default BlogPage;
