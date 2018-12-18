import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import '../styles/home.scss'

const Hello = styled.div`
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.lightgrey};
  box-shadow: ${props => props.theme.bs};
`

const IndexPage = () => (
  <Layout>
    <Hello>Hello Everybody!</Hello>
    <div className="home">
      <section>
        <p className="title-bg">We Design <span>Brand Experience</span> To Help & <span>Grow Your Business</span></p>
      </section>
      <nav>
        <div><Link to="/value/">Value</Link></div>
        <div><Link to="/work/">Work</Link></div>
        <div><Link to="/about/">About</Link></div>
      </nav>
    </div>
  </Layout>
)

export default IndexPage
