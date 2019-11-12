/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import layoutStyles from "./layout.module.scss"
import Header from "../components/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={layoutStyles.mainContainer}>
      <Header siteTitle={data && data.site.siteMetadata.title} />
      <main className="container-fluid">
        <div className="container">{children}</div>
      </main>
      <footer>
        <span>
          © {new Date().getFullYear()} <a href="https://www.dev6.com/">Dev6</a>
        </span>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
