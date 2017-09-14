import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = ({ items, logo, logoLink }) => {
  const navItems = items.map((item, index) =>
    <li key={index} className="item">
      <Link to={item.link}>
        {item.label}
      </Link>
    </li>
  )
  return (
    <ul className="NavBar">
      <li className="logo">
        <Link to={logoLink}>
          {logo}
        </Link>
      </li>
      {navItems}
    </ul>
  )
}

NavBar.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]),
  logoLink: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
}

NavBar.defaultProps = {
  items: [],
}

NavBar.displayName = 'NavBar'

export default NavBar
