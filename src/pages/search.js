import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import PostList from "../components/postList";
import SearchForm from "../components/searchForm";

import { graphql, useStaticQuery, Link } from "gatsby";

const SearchPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            id
            date: publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `);
  const allPosts = data.allContentfulBlogPost.edges;

  const [searchterm, setSearchTerm] = useState("");
  const [posts, setPosts] = useState(allPosts);

  useEffect(() => {
    setPosts(
      allPosts.filter(post => {
        let title = post.node.title.toLowerCase();
        return title.includes(searchterm.toLowerCase());
      })
    );
  }, [searchterm, allPosts]);

  return (
    <Layout>
      <Head title='Search' />
      <h1>Search</h1>
      <SearchForm
        searchTerm={searchterm}
        setSearchTerm={setSearchTerm}
        placeholder={"Search for blog posts"}
      />
      <PostList posts={posts} />
    </Layout>
  );
};

export default SearchPage;
