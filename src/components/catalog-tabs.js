import React from "react"
import PropTypes from "prop-types"
import { Nav } from "react-bootstrap"
import "./catalog-tabs.scss"

const CatalogTabs = ({ onSelect, selectedId }) => {
  console.log("Function: CatalogTabs, selectedId: ", selectedId)

  return (
    <Nav variant={"tabs"} className="mt-3">
      <Nav.Item>
        <Nav.Link className={selectedId === 0 ? "active" : ""} onClick={() => onSelect(0)}>
          All Designs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={selectedId === 1 ? "active" : ""} onClick={() => onSelect(1)}>
          Men
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className={selectedId === 2 ? "active" : ""} onClick={() => onSelect(2)}>
          Women
        </Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

CatalogTabs.propTypes = {
  onSelect: PropTypes.func,
  selectedId: PropTypes.number,
}

export default CatalogTabs
