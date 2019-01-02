import React, { Component } from 'react'
import styled from 'styled-components'

const Notification = styled.div`
  height: 50px;
  width: 150px;
  padding: 10px;
  background: tomato;
  position: fixed;
  bottom: 10px;
  left: 10px;
`

const BannerWrapper = styled.div`
  height: 100px;
  width: 100%;
  padding: 10px;
  background: teal;
  position: fixed;
  top: 0px;
  left: 0px;
`

export default class popup extends Component {
  render() {
    return (
      <Notification>
        THIS IS A POPUP
      </Notification>
    )
  }
}

export class Banner extends Component {
  render() {
    return (
      <BannerWrapper>
        THIS IS A POPUP
      </BannerWrapper>
    )
  }
}
