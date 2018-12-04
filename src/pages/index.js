import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import '../styles/home.scss'

const IndexPage = () => (
  <Layout>
    <div className="home">
      <section>
        <p className="title-bg">We Design <span>Brand Experience</span> To Help & <span>Grow Your Business</span></p>
      </section>
      <navbar>
        <div><Link to="/value/">Value</Link></div>
        <div><Link to="/work/">Work</Link></div>
        <div><Link to="/about/">About</Link></div>
      </navbar>
    </div>
  </Layout>
)

export default IndexPage
