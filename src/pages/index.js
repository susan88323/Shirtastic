import React, { useEffect, useState } from "react"

import CatalogTabs from "../components/catalog-tabs"
import Layout from "../hoc/layout"
import SEO from "../components/seo"
import ProductsList from "../components/products-list"
import { ADD_TO_CART, StateProvider } from "../state/state"
import { dataSource } from "../data/data"
const IndexPage = () => {
  const initialState = {
    cart: [],
  }
  const [category, setCategory] = useState(0)
  const [data, setData] = useState(dataSource)
  const reducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const newCart = [...state.cart]
        if (newCart.findIndex(item => item.id === action.payload.id) === -1) {
          newCart.push(action.payload)
        }
        return { ...state, cart: newCart }
      default:
        return state
    }
  }

  useEffect(() => {
    switch (category) {
      case 0:
        setData(dataSource)
        break
      case 1:
        setData([...dataSource].filter(item => item.gender === "M"))
        break
      case 2:
        setData([...dataSource].filter(item => item.gender === "W"))
        break
    }
  }, [category])

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <SEO title="Home" />
        <CatalogTabs onSelect={id => setCategory(id)} selectedId={category} />
        <ProductsList items={data} />
      </Layout>
    </StateProvider>
  )
}

export default IndexPage
