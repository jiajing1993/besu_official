import React from 'react'
import { Link } from 'gatsby'

import './header.scss'
import logo from "../images/besu.png"

const Header = ({ siteTitle }) => (
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
      <Link to="/" activeStyle={{ display: "none" }}> Back </Link>
    </div>
)

export default Header
