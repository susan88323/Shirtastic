import React, { useEffect, useState } from "react"

import CatalogTabs from "../components/catalog-tabs"
import Layout from "../hoc/layout"
import ProductsList from "../components/products-list"
import { graphql } from "gatsby"
import { navigate } from "../../.cache/gatsby-browser-entry"

const IndexPage = ({ data, pageContext }) => {
  const { allDataJson } = data
  const [category, setCategory] = useState(0)
  const [dataSource, setDataSource] = useState([])

  const { currentPage, numPages } = pageContext
  const handlePageSelected = async ({ selected }) => {
    await navigate(`${category === 0 ? "" : category === 1 ? "men" : "women"}/${selected === 0 ? "" : selected + 1}`)
  }
    
  return (
    <Layout>
      <CatalogTabs />
      <ProductsList
        items={allDataJson.edges}
        currentPage={currentPage}
        numPages={numPages}
        pageSelected={data => handlePageSelected(data)} />
    </Layout>
  )
}


export default IndexPage
export const query = graphql`
  query productListQuery($skip: Int!, $limit: Int!, $gender: String!) {
    allDataJson(limit: $limit, skip: $skip, filter: {gender: {regex: $gender}}) {
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
`

