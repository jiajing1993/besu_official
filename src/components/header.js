import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../images/besu.png'

const Navbar = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 100;
  box-shadow: ${props => props.scrolled ? '0px 4px 18px rgba(0,0,0,0.1)' : ''};
  transition: all 0.5s;
  img.logo {
    width: 100px;
  }
  a {
    color: #daa520;
    transition: all 0.4s;
    &:hover {
      box-shadow: 0px 2px 0px rgba(#daa520,1)
    }
  }
`

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    this.setState({
      scrolled: window.scrollY !== 0
    });
  }

  render() {
    return (
      <Navbar scrolled={this.state.scrolled}>
        <img className="logo" src={logo} alt="Logo" />
        <Link to="/" activeStyle={{ display: "none" }}> Back </Link>
      </Navbar>
    )
  }
}
