import React, { Component } from 'react'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 2.3px;
  color: #000000;
  width: 50%;
  margin-bottom: 20vh;
  @media (max-width: 700px) {
    width: 100%;
  }
  
`

export default class bigText extends Component {
  render() {
    return (
      <Text>
        {this.props.children}
      </Text>
    )
  }
}
