import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import PostList from "../components/postList";

import { graphql, useStaticQuery } from "gatsby";
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            date: publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <section className='sectionPlain'>
        <Head title='Blog' />
        <h1>Blog</h1>
        <PostList posts={posts} />
      </section>
    </Layout>
  );
};

export default BlogPage;
