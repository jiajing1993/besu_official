import React from 'react'
import Layout from '../components/layout'
import Grid from '../components/style/grid'
import Jumbotron from '../components/style/jumbotron'
import { teams } from '../data/team'
import '../styles/about.scss'

const AboutPage = () => {
  return (
    <Layout>
      <Jumbotron>About</Jumbotron>
      <div className="about-body">
        <Grid.Row marginBottom={120}>
          <Grid.Column width={4}>
            <p className="about-title">About</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <p className="about-description">
              <strong>
                Besu is a creative design agency that based in Kuala Lumpur, Malaysia. 
                We design experience through story that builds brands, platforms that help businesses to win in digital culture.
              </strong>
              <br/><br/>
              Besu in a way has a meaning of ‘Not Lose’. We want to help SME to able to compete in the digital world. SMEs are different compare to large companies/corporates. They do not have billion dollar budgets, huge professional sales teams nor sophisticated quantitative analysis. But they are nimble, agile, and responsive to change. Their leaders have an exciting vision of what they want their business to be.
              <br/><br/>
              Combining our experience and expertise in business strategy and Brand Story, we have developed extremely profitable solution for SMEs operating in different industries and conditions.
              <br/><br/>
              Our primary aim is that our work immediately improves your bottom line. Our expertise is efficiency. We pride ourselves on our ability to develop superior solutions with the absolute minimum investment required.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row marginBottom={120}>
          <Grid.Column width={4}>
          <p className="about-title">Team</p>
          </Grid.Column>
          <Grid.Column width={6}>
            {
              teams.map((member)=> {
                return (
                  <div className="team-member" key={member.id}>
                    <img src={member.image} alt=""/>
                    <div className="team-info">
                      <div>
                        <p className="name">{ member.name }</p>
                        <p className="role">{ member.role }</p>
                        <a href={`mailto:${member.email}`}>Email</a>
                        <a href={`tel:${member.phone}`}>Phone</a>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </Grid.Column>
        </ Grid.Row>
        <Grid.Row marginBottom={120}>
          <Grid.Column width={4}>
          <p className="about-title">Process</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <ul className="process">
              <li>Understand and empathize with the users' life (consumer software) or work (business software) needs.</li>
              <li>First Concept - all about paper drawing and communicate.</li>
              <li>We don’t design for you. We design for human, for your users.</li>
              <li>We identifying your style.</li>
              <li>Time to get the hands dirty. </li>
              <li>We might make mistake, so your feedback is super important.</li>
              <li>Rocket Launched! Hooray. </li>
              <li>Not end yet, take what users said, and keep improving it!</li>
            </ul>
          </Grid.Column>
        </ Grid.Row>
        <Grid.Row marginBottom={120}>
          <Grid.Column width={4}>
            <p className="about-title">Pricing</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="pricing">
              <p>
                We charged <strong>RM 10,000</strong> for 5 pages website with professional photography shooting.
                <br/>
                <br/>
                For larger projects, please contact for better arrangements. 
              </p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </div>
    </Layout>
  )
}

export default AboutPage
