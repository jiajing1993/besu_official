import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import posed from 'react-pose'

import '../styles/home.scss'


const AnimatedContainer = posed.div({
  enter: {
    y: -50,
    opacity: 1,
    transition: { duration: 1000 }
  },
  exit: {
    y: 300,
    opacity: 0,
    transition: { duration: 1000 }
  },
});

const IndexPage = () => (
  <Layout>
    <AnimatedContainer>
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
    </AnimatedContainer>
  </Layout>
)

export default IndexPage
