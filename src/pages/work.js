import React from 'react'
import Layout from '../components/layout'

import '../styles/work.scss'

const WorkPage = () => (
  <Layout>
    <div className="work">
      <p className="page-title">Work</p>
    </div>
    <div className="work-body">
      <p className="big-text">We humanize brands, launch visions and clarify the complex.</p>
      <div className="grid">
        <div className="grid-col-3">
          <ul className="work-categories">
            <li>All</li>
            <li>Profesional Shooting</li>
            <li>Video Production</li>
            <li>Web Deisgn</li>
            <li>UI UX </li>
          </ul>
        </div>
        <div className="grid-col-7">
          <div className="grid">
            {
              [1,2,3,4,5].map((index) => {
                return (
                  <div className="grid-col-5" key={index}>
                    <div className="work-item">
                      <img src="https://boygeniusreport.files.wordpress.com/2016/10/macbook-pro-2016-apple-event-1.jpg" alt=""/>
                      <p className="work-name">CT Engineering & Construction</p>
                      <p className="work-type">Branding + Website</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default WorkPage
