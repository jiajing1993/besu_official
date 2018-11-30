import React from 'react'
import Layout from '../components/layout'
import '../styles/value.scss'

const ValuePage = () => (
  <Layout>
    <div className="value">
      <p className="page-title">Value</p>
    </div>
    <div className="value-body">
      <p className="big-text">We create story, brand, digital presence, good business and sendwiches.</p>
      {
        [1,2,3,4].map((index) => {
          return (
            <div className="grid" key={index}>
              <div className="grid-col-4">
                <p>Digital Transformation & Presence</p>
              </div>
              <div className="grid-col-6">
                <div className="value-item">
                  <p className="value-info">
                    We design websites, applications & digital products that form the strongest connection between brand and the customers.
                  </p>
                  <ul className="value-example">
                    <li>Video Production</li>
                    <li>Professional Production</li>
                    <li>User Experience & Interface</li>
                    <li>Ecommerce Development</li>
                    <li>Responsive Web & Development</li>
                  </ul>
                  <button>Don't Click</button>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  </Layout>
)

export default ValuePage
