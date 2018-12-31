import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class head extends Component {
  render() {
    return (
      <Helmet
        title={`Besu | We create Brand and Digitalize Your Business`}
        meta={[
          { name: 'description', content: 'Besu' },
          { name: 'keywords', content: 'design agency, creative, branding' },
          { name: 'google-site-verification', content: 'D4EYcjnP6T2COA49EO9ceEwEtq3W0Y4K8MaXmt0rWzI' },
        ]}
      >
        <html lang="en" />
      </Helmet>
    )
  }
}
