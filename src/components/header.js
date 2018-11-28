import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1>
      <Link to="/" activeStyle={{
            color: "red",
          }} style={{ color: 'black', textDecoration: 'none', }}>
        {siteTitle}
      </Link>
    </h1>
  </div>
)

export default Header
