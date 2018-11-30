import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import posed from 'react-pose'

import Header from './header'
import Footer from './footer'
import './layout.scss'


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

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => {
      return (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Besu' },
              { name: 'keywords', content: 'design agency, creative, branding' },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="body">
            <AnimatedContainer>
              {children}
            </AnimatedContainer>
          </div>
          <Footer />
        </>
      )}
    }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
