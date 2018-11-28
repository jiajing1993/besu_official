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
    y: 0,
    opacity: 1,
    transition: { duration: 300 }
  },
  exit: {
    y: 100,
    opacity: 0,
    transition: { duration: 150 }
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
            <Footer />
          </div>
        </>
      )}
    }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
