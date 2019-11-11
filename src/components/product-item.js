import React, { useState } from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
import styles from "./product-item.module.scss"
import shirtImage from "../images/mans-shirt-1.jpg"
import BasketIcon from "./basket-icon"
import EditIcon from "./edit-icon"
import { ADD_TO_CART, useStateValue } from "../state/state"

const ProductItem = props => {
  const [isHoveredCart, setHoveredCart] = useState(false)
  const [isHoveredEdit, setHoveredEdit] = useState(false)
  const [{ cart }, dispatch] = useStateValue()

  const handleAddToCart = item => {
    dispatch({ type: ADD_TO_CART, payload: item })
  }
  return (
    <Card className={styles.card}>
      <Card.Img variant="top" src={shirtImage} />
      <Card.Title className={styles.cardTitle}>cardTitle</Card.Title>
      <Card.Body className={styles.cardDescription}>Here the short description comes</Card.Body>
      <div className={styles.actionsContainer}>
        <BasketIcon
          color={isHoveredCart ? "#0F5279" : "#10A2DC"}
          onClick={() => handleAddToCart(props.title)}
          size={2}
          onMouseEnter={() => {
            setHoveredCart(true)
          }}
          onMouseLeave={() => {
            setHoveredCart(false)
          }}
        />
        <strong>$10</strong>
        <EditIcon
          color={isHoveredEdit ? "#0F5279" : "#10A2DC"}
          size={1.9}
          onMouseEnter={() => {
            setHoveredEdit(true)
          }}
          onMouseLeave={() => {
            setHoveredEdit(false)
          }}
        />
      </div>
    </Card>
  )
}

ProductItem.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.string,
}

export default ProductItem
