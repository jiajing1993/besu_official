import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'

import './header.scss'
import logo from "../images/besu.png"

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
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
