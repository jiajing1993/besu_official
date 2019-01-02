import React, { Component } from 'react'
import styled from 'styled-components'
import Notification, { Banner } from '../components/popup'
import '../styles/demo.scss'

const Button = styled.button`
  padding: 16px 40px;
  background-color: ${props => props.background};
  color: ${props => props.color};
  border: 1px solid ${props => props.color};
  border-radius: 5px;
  margin: 0px 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s;
  &:focus {
    outline: none;
  }
  &:hover {
    outline: none;
    transform: translateY(-7px);
    box-shadow: 0px 4px 10px rgba(0,0,0,0.3)
  }
`
export default class demo extends Component {
  render() {
    return (
      <div className="demo-wrapper">
        <div className="demo">
          <h2>Converting Visitor to Buyer</h2>
          <Button background="black" color="white">Banner</Button>
          <Button background="white" color="black">Notification</Button>
          <Button background="black" color="white">Popup</Button>
          <Notification />
          <Banner></Banner>
        </div>
      </div>
    )
  }
}
