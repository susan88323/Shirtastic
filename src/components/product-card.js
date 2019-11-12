import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"
import styles from "./product-card.module.scss"

import BasketIcon from "./basket-icon"
import EditIcon from "./edit-icon"
import { ADD_TO_CART, useStateValue } from "../state/state"

import { Link } from "gatsby"

const ProductCard = ({ item }) => {
  const [isHoveredCart, setHoveredCart] = useState(false)
  const [isHoveredEdit, setHoveredEdit] = useState(false)
  const [featuredItem, setFeatured] = useState()
  const [{ cart }, dispatch] = useStateValue()

  useEffect(() => {
    const bestPriceItem = item.items.reduce((prev, curr) => (prev.price < curr.price ? prev : curr))
    setFeatured({ ...item, items: bestPriceItem })
    return () => {}
  }, [item])
  const handleAddToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: featuredItem })
  }

  return (
    <>
      {featuredItem && (
        <Card className={styles.card}>
          <Link to={`/t-shirts/${featuredItem.id}`} className={styles.link}>
            <Card.Img variant="top" src={featuredItem.items.image} />
            <Card.Title className={styles.cardTitle}>{featuredItem.name}</Card.Title>
            <Card.Body className={styles.cardDescription}>{featuredItem.description}</Card.Body>
          </Link>

          <div className={styles.actionsContainer}>
            <BasketIcon
              color={isHoveredCart ? "#0F5279" : "#10A2DC"}
              onClick={handleAddToCart}
              size={2}
              onMouseEnter={() => {
                setHoveredCart(true)
              }}
              onMouseLeave={() => {
                setHoveredCart(false)
              }}
            />
            <strong>${featuredItem.items.price}</strong>
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
      )}
    </>
  )
}

ProductCard.propTypes = {
  item: PropTypes.object,
}

export default ProductCard
