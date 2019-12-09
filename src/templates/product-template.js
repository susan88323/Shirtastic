import React from "react"
import ProductItem from "../components/product-item"
import Layout from "../hoc/layout"

const ProductTemplate = ({ props }) => {
  console.log('walalala', props);
  return (
    <Layout>
      <ProductItem productItem={props.pageContext} />
    </Layout>
  )
}
export default ProductTemplate
