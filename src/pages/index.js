import React, { useState } from "react"

import CatalogTabs from "../components/catalog-tabs"
import Layout from "../hoc/layout"
import SEO from "../components/seo"
import ProductsList from "../components/products-list"
import { ADD_TO_CART, StateProvider } from "../state/state"

const IndexPage = () => {
  const initialState = {
    cart: [],
  }
  const [category, setCategory] = useState(0)
  const reducer = (state, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const newCart = [...state.cart]
        if (newCart.findIndex(item => item === action.payload) === -1) {
          newCart.push(action.payload)
        }
        return { ...state, cart: newCart }
      default:
        return state
    }
  }
  const handleSelected = id => {
    setCategory(id)
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Layout>
        <SEO title="Home" />
        <CatalogTabs onSelect={id => handleSelected(id)} selectedId={category} />
        <ProductsList />
      </Layout>
    </StateProvider>
  )
}

export default IndexPage
