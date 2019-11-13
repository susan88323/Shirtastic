import React from "react"
import { Nav } from "react-bootstrap"
import "./catalog-tabs.scss"
import { Link } from "gatsby"
import { SET_CATEGORY, useStateValue } from "../state/state"

const CatalogTabs = () => {
  const [{ category }, dispatch] = useStateValue()

  return (
    <Nav variant={"tabs"} className="mt-3 catalog-container">
      <Nav.Item>
        <Nav.Link
          className={category === 0 ? "active" : ""}
          as={Link}
          to={"/"}
          onClick={() => dispatch({ type: SET_CATEGORY, payload: 0 })}
        >
          All Designs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={category === 1 ? "active" : ""}
          as={Link}
          to={"/men"}
          onClick={() => dispatch({ type: SET_CATEGORY, payload: 1 })}
        >
          Men
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={category === 2 ? "active" : ""}
          as={Link}
          to={"/women"}
          onClick={() => dispatch({ type: SET_CATEGORY, payload: 2 })}
        >
          Women
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default CatalogTabs
