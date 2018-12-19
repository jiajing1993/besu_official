import React from 'react'
import Layout from '../components/layout'
import Grid from '../components/style/grid'
import BigText from '../components/style/bigText'
import Jumbotron from '../components/style/jumbotron'
import { values } from '../data/value'
import '../styles/value.scss'

const ValuePage = () => (
  <Layout>
    <Jumbotron>Value</Jumbotron>
    <div className="value-body">
      <BigText>We create story, brand, digital presence, good business and sandwiches.</BigText>
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
