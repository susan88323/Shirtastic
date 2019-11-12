import React from "react"
import PropTypes from "prop-types"

const ArrowNextIcon = props => {
  const styles = {
    svg: {
      display: "inline-block",
      verticalAlign: "middle",
    },
    path: {
      fill: props.color,
    },
  }
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="chevron-right"
      className="svg-inline--fa fa-chevron-right fa-w-10"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      style={styles.svg}
      width={`${props.size}rem`}
      height={`${props.size}rem`}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      <path
        style={styles.path}
        d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
      ></path>
    </svg>
    // <svg
    //   onMouseEnter={props.onMouseEnter}
    //   onMouseLeave={props.onMouseLeave}
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 512 512"
    //   style={styles.svg}
    //   width={`${props.size}rem`}
    //   height={`${props.size}rem`}
    // >
    //   <path
    //     style={styles.path}
    //     d="M492.2 74.3l-54.5-54.5c-26.4-26.4-69.1-26.4-95.5 0L12.7 349.3.3 461.2c-3.2 29.2 21.5 53.7 50.5 50.5l111.8-12.4 329.6-329.6c26.4-26.4 26.4-69.1 0-95.4zM140.6 453.4l-92.3 10.3 10.3-92.3L294 135.9l82.1 82.1-235.5 235.4zm317.7-317.6L410 184.1 327.9 102l48.3-48.3c7.6-7.6 20-7.6 27.6 0l54.5 54.5c7.6 7.6 7.6 19.9 0 27.6z"
    //   />
    // </svg>
  )
}

ArrowNextIcon.defaultProps = {
  size: 16,
}
ArrowNextIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
}

export default ArrowNextIcon
