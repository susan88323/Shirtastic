import React from "react"
import PropTypes from "prop-types"
import ProductItem from "./product-item"
import { Col, Row } from "react-bootstrap"

const ProductsList = ({ items }) => {
  const shirts = items.map((item, index) => (
    <Col key={index} xs lg={4} md={6} sm={12}>
      <ProductItem title={item} />
    </Col>
  ))

  return <Row className=" mt-3">{shirts}</Row>
}

ProductsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
}

ProductsList.defaultProps = {
  items: [1, 2, 3, 4],
}

export default ProductsList
