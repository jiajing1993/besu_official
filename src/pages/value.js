import React from 'react'
import Layout from '../components/layout'
import Grid from '../components/style/grid'
import { values } from '../data/value'
import '../styles/value.scss'

const ValuePage = () => (
  <Layout>
    <div className="value">
      <p className="page-title">Value</p>
    </div>
    <div className="value-body">
      <p className="big-text">We create story, brand, digital presence, good business and sandwiches.</p>
      {  
        values.map((value) => {
          return (
            <Grid.Row key={value.id}>
                <Grid.Column width={4}>
                  <p className="value-name">{value.name}</p>
                </Grid.Column>
                <Grid.Column width={6}>
                  <div className="value-item">
                    <p className="value-info">{value.description}</p>
                    <ul className="value-example">
                      {
                        value.services.map((service) => {
                          return (
                            <li>{ service }</li>
                          )
                        })
                      }
                    </ul>
                    <button>Don't Click</button>
                  </div>
                </Grid.Column>
            </Grid.Row>
          )
        })
      }
    </div>
  </Layout>
)

export default ValuePage
