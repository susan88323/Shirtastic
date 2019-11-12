import React from "react"
import ProductItem from "../components/product-item"
import Layout from "../hoc/layout"

const ProductTemplate = ({ id }) => {
  return (
    <Layout>
      <ProductItem id={id} />
    </Layout>
  )
}
export default ProductTemplate
