import React, { Component } from 'react'
import Helmet from 'react-helmet'

export default class head extends Component {
  render() {
    return (
      <Helmet
        title={`Besu Official Website`}
        meta={[
          { name: 'description', content: 'Besu' },
          { name: 'keywords', content: 'design agency, creative, branding' },
        ]}
      >
        <html lang="en" />
      </Helmet>
    )
  }
}
