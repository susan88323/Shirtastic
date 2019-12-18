/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    return graphql(`
    {
        allDataJson {
            edges {
                node {
                    id
                    items {
                        id
                        image
                        price
                        qty
                        size
                    }
                    gender
                    description
                    name
                }
            }
        }
    }
    `).then(result => {
        if (result.errors) {
            throw result.errors
        }
        result.data.allDataJson.edges.forEach(({node}) => {
            createPage({
                path: `/product/${node.id}`,
                component: path.resolve("./src/templates/product-template.js"),
                context: {...node}
            })
        })
    }).catch(error => {
        console.error('CreatePages error: ', error)
        reporter.panicOnBuild(`Error while running GraphQL query`)
    })
}