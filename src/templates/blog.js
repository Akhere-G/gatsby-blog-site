import React from 'react'
import Layout from "../components/layout"
import Head from "../components/head"
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
//variable $slug is found in context which is made in gatsby-node.js
export const query = graphql`
query($slug: String) {
  contentfulBlogPost(slug: {eq: $slug}){
    title
    date:publishedDate(formatString: "MMMM Do, YYYY")
    body{
      raw
    }
  }

}

`
const Blog = ({data}) => {
  const node = data.contentfulBlogPost
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        {console.log(node)}
        const alt = ""//node.data.target.fields.title['en-us'];
        const url = ""//node.data.target.fields.file['en-us'].url;
        return <img alt={alt} src={url}></img>
      }
    }

  }

  return (
    <Layout>
      <Head title={node.title}/>
      <h1>{node.title}</h1>
      <p>{node.date}</p>
      {documentToReactComponents(JSON.parse(node.body.raw), options)}
      
    </Layout>
  )
}

export default Blog
