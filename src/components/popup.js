import React, { Component } from 'react'
import styled from 'styled-components'
import posed, { PoseGroup }  from 'react-pose'



const PopupWrapper = styled.div`
  height: 400px;
  width: 400px;
  padding: 10px;
  background: #3498db;
  position: fixed !important;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
`

const NotificationWrapper = styled.div`
  height: 100px;
  width: 300px;
  padding: 10px;
  background: tomato;
  position: fixed !important;
  bottom: 10px;
  left: 10px;
`

const AnimatedContainer = posed(NotificationWrapper)({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: { y: 50, opacity: 0 }
});

const BannerWrapper = styled.div`
  height: 100px;
  width: 100%;
  padding: 10px;
  background: teal;
  position: fixed !important;
  top: 0px;
  left: 0px;
`

export default class popup extends Component {
  render() {
    return (
      <PopupWrapper>
        THIS IS A POPUP
      </PopupWrapper>
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

export class Notification extends Component {  
  render() {
    return (
      <PoseGroup>
        { this.props.show && (
          <AnimatedContainer key="hello">
              THIS IS A POPUP
          </AnimatedContainer>      
        )}
      </PoseGroup>  
    )
  }
}

      
