import React, { Component } from 'react'
import Header from './header'
import Footer from './footer'
import Head from './head'
import './layout.scss'

export default class layout extends Component {
  render() {
    return (
      <div>
        <Head/>
        <Header/>
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
