import React from 'react'
import posed from 'react-pose'
import { Link } from 'gatsby'

import './header.scss'
import logo from "../images/besu.png"

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1000 }
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: { duration: 600 }
  },
});

const Header = ({ siteTitle }) => (
  <AnimatedContainer>
    <div className="header">
      <img className="logo" src={logo} alt="Logo" />
      <Link to="/" activeStyle={{ display: "none" }}> Back </Link>
    </div>
  </AnimatedContainer>
    
)

export default Header
