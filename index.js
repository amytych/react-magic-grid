import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import MagicGrid from "magic-grid"

const MagicGridWrapper = ({ children, ...props }) => {
  const container = useRef(null)
  let grid = null

  useEffect(() => {
    let timeout
    // magic-grid handles resizing via its own `listen` method
    // unfortunately event listener it creates is not being cleaned up
    // that's why we don't use it and have our own instead
    // see: https://github.com/e-oj/Magic-Grid/issues/24
    const resize = () => {
      if (!timeout)
        timeout = setTimeout(() => {
          grid && grid.positionItems()
          timeout = null
        }, 200)
    }

    if (!grid) {
      grid = new MagicGrid({ container: container.current, ...props })
      window.addEventListener("resize", resize)
    }

    grid.positionItems()

    return () => {
      window.removeEventListener("resize", resize)
    }
  })

  return <div ref={container}>{children}</div>
}

MagicGridWrapper.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
}

export default MagicGridWrapper
