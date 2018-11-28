import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <h1>We Design Brand Experience To Help Business to Grow</h1>
      <Link to="/value/">Value</Link>
      <Link to="/work/">Work</Link>
      <Link to="/about/">About</Link>
    </div>
  </Layout>
)

export default IndexPage
