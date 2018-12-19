import React from 'react'
import Layout from '../components/layout'
import Grid from '../components/style/grid'
import BigText from '../components/style/bigText'
import Jumbotron from '../components/style/jumbotron'
import { projects } from '../data'

import '../styles/work.scss'

console.log(projects)
const WorkPage = () => (
  <Layout>
    <Jumbotron>Work</Jumbotron>
    <div className="work-body">
      <BigText>We humanize brands, launch visions and clarify the complex.</BigText>
      <Grid.Row>
        <Grid.Column width={3}>
          <ul className="work-categories">
            <li>All</li>
            <li>Profesional Shooting</li>
            <li>Video Production</li>
            <li>Web Deisgn</li>
            <li>UI UX </li>
          </ul>
        </Grid.Column>
        <Grid.Column width={7}>
          <Grid.Row>
            { 
              projects.map((project) => {
                return (
                  <Grid.Column width={5} key={project.id}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
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
                  </Grid.Column>
                )
              })
            }
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
    </div>
  </Layout>
)

export default WorkPage
