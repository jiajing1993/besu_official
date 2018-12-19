import React, { Component } from 'react'
import styled from 'styled-components'

const JumbotronWrapper = styled.div`
  min-height: calc(100vh - 70px);
  align-items: center;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  p {
    text-align: center;
    font-size: 20vw;
    margin: 0;
  }
`

export default class Jumbotron extends Component {
  render() {
    return (
      <JumbotronWrapper>
        <p>
          {this.props.children}
        </p>
      </JumbotronWrapper>
    )
  }
}
