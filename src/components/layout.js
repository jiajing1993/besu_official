import React, { Component } from 'react'
import posed from 'react-pose'
import Header from './header'
import Footer from './footer'
import Head from './head'
import './layout.scss'

const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 1000 }
  },
  exit: {
    y: 300,
    opacity: 0,
    transition: { duration: 1000 }
  },
});

export default class layout extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Header/>
          <div className="body">
            <AnimatedContainer>
              {this.props.children}
            </AnimatedContainer>
          </div> 
        <Footer />
      </div>
    )
  }
}
