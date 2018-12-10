import React from 'react'
import Layout from '../components/layout'
import { projects } from '../data'

import '../styles/work.scss'

console.log(projects)
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
              projects.map((project) => {
                return (
                  <div className="grid-col-5" key={project.id}>
                    <a href={project.link} target="_blank">
                      <div className="work-item">
                        <img src={project.image} alt=""/>
                        <p className="work-name">{ project.name}</p>
                        <p className="work-type">{
                          project.type.map((type, index) => {
                            return (
                              index === 0 ? `${type} ` : `+ ${type} `
                            )
                          })
                        }</p>
                      </div>
                    </a>
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
