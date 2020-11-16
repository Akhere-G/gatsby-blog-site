/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 require('dotenv').config({
   path:`.env.${process.env.NODE_ENV}`
 });

module.exports = {
  /* Your site config here */
  siteMetadata:{
    title: 'Full-Stack Bootcamp',
    author: 'Akhere Ihoeghinlan'
  },
  plugins: ["gatsby-plugin-sass", 
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN

      }

    },
    {
      resolve: `gatsby-plugin-prettier-build`,
      options: {
        // default values
        types: ['html','js','css'],
        concurrency: 20,
        verbose: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]

      }
    }


]}
