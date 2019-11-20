const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "product-template" } } }) {
        edges {
          node {
            id
            frontmatter {
              gender
            }
          }
        }
      }
    }
  `)
  const products = result.data.allMarkdownRemark.edges
  const productsMen = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.gender === "M")
  const productsWomen = result.data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.gender === "W")

  const productsPerPage = 3
  const numPages = Math.ceil(products.length / productsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/${i + 1}`,
      component: path.resolve("./src/templates/index.js"),
      context: {
        limit: productsPerPage,
        skip: i * productsPerPage,
        numPages,
        currentPage: i + 1,
        gender: "//",
      },
    })
  })

  const numPagesMen = Math.ceil(productsMen.length / productsPerPage)
  Array.from({ length: numPagesMen }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/men` : `/men/${i + 1}`,
      component: path.resolve("./src/templates/index.js"),
      context: {
        limit: productsPerPage,
        skip: i * productsPerPage,
        numPages: numPagesMen,
        currentPage: i + 1,
        gender: "/M/",
      },
    })
  })
  const numPagesWomen = Math.ceil(productsWomen.length / productsPerPage)
  Array.from({ length: numPagesMen }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/women` : `/women/${i + 1}`,
      component: path.resolve("./src/templates/index.js"),
      context: {
        limit: productsPerPage,
        skip: i * productsPerPage,
        numPages: numPagesWomen,
        currentPage: i + 1,
        gender: "/W/",
      },
    })
  })
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/product/${node.id}`,
      component: path.resolve("./src/templates/product-template.js"),
      context: { id: node.id },
    })
  })

  const allPages = await graphql(`
    query AllPages {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `)
  if (allPages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
  }

  allPages.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (String(node.frontmatter.templateKey) !== "product-template") {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`src/templates/${String(node.frontmatter.templateKey)}.js`),
        context: { id: node.id },
      })
    }
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
