import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"

import { graphql, useStaticQuery, Link } from "gatsby"
import styles from "./blog.module.scss"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost(
      sort: { 
        fields:publishedDate, 
        order: DESC 
      }
    ){
      edges{
        node{
          title
          slug
          date:publishedDate( formatString: "MMMM Do, YYY")
          body{
            raw 
          }
          
        }
      }
    }
  }
  `)
  const posts = data.allContentfulBlogPost.edges 
  return (
    <Layout>
      <Head title="Blog"/>
      <h1>Blog</h1>
      <div>
        <ol className={styles.posts}>
          {
            posts.map((post) => {
              const {title, date} = post.node;
              return (
                <li className={styles.post}>
                  <Link to={`/blog/${post.node.slug}`}>
                    <h2>{title}</h2>
                    <p>{date}</p>
                  </Link>
                </li>
              )
            }
            )

          }
        </ol>
      </div>
      
    </Layout>
  )
}

export default BlogPage
