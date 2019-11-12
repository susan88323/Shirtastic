import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/navlogo.png"
import headerStyles from "./header.module.scss"
import { Navbar } from "react-bootstrap"
import BasketIcon from "./basket-icon"
import { useStateValue } from "../state/state"

const Header = ({ siteTitle }) => {
  const [{ cart }, dispatch] = useStateValue()

  return (
    <header className={headerStyles.container}>
      <Navbar variant="light" sticky={"top"} className={`py-0 ${headerStyles.shadowNav}`}>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            <img src={logo} alt={siteTitle} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end d-flex" id="basic-navbar-nav">
          <div className={headerStyles.vr} />
          <div className={headerStyles.cartBtn}>
            <BasketIcon color={"#10A2DC"} size={2} />
          </div>
          <div className={headerStyles.cartCount}>{cart.length || 0}</div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
