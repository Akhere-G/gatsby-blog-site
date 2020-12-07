const path = require("path");
/*
module.exports.onCreateNode = ({ node, actions })=> {
  const { createNodeField } = actions

  if(node.internal.type === 'MarkdownRemark'){
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}
*/
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve("./src/templates/blog.js");
  const res = await graphql(`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  const edges = res.data.allContentfulBlogPost.edges;
  edges.forEach((edge, index) => {
    let next = null,
      previous = null;
    if (index > 0) {
      next = edges[index - 1].node.slug;
    }
    if (index < edges.length - 1) {
      previous = edges[index + 1].node.slug;
    }

    const slug = edge.node.slug;
    createPage({
      component: blogTemplate,
      path: `/blog/${slug}`,
      context: {
        previous,
        slug,
        next,
      },
    });
  });
};
