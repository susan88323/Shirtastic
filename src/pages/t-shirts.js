import React from "react"
import ProductTemplate from "../templates/product-template"
import { Router } from "@reach/router"

const TShirts = props => {
  console.log("Function: TShirts, props: ", props)
  return (
    <Router>
      <ProductTemplate path="/t-shirts/:id" />
    </Router>
  )
}

export default TShirts
