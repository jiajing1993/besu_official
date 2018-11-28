import React from 'react'
import { Link } from 'gatsby'

import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <h1 className="logo">
      {siteTitle}
    </h1>
    <Link to="/" activeStyle={{ display: "none" }}> Back </Link>
  </div>
)

export default Header
