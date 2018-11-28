import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the value page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
