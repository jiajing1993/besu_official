import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose'

import './header.scss'

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
      <h1 className="logo">
        {siteTitle}
      </h1>
      <Link to="/" activeStyle={{ display: "none" }}> Back </Link>
    </div>
  </AnimatedContainer>
)

export default Header
