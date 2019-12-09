import React from "react"
import ProductItem from "../components/product-item"
import Layout from "../hoc/layout"
import { graphql } from "gatsby"

const ProductTemplate = ({ data }) => {
  return (
    <Layout>
      <ProductItem productItem={data.dataJson} />
    </Layout>
  )
}
export default ProductTemplate


export const query = graphql`
  query productQuery($id: String!) {
    dataJson(id: { eq: $id }) {
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
`

