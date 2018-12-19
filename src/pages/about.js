import React from 'react'
import Layout from '../components/layout'
import Grid from '../components/style/grid'
import '../styles/about.scss'

const AboutPage = () => {
  return (
    <Layout>
      <div className="about">
        <p className="page-title">About</p>
      </div>
      <div className="about-body">
        <Grid.Row className="about-us">
          <Grid.Column width={4}><p>About</p></Grid.Column>
          <Grid.Column width={6}>
            <p>
              <strong>
                Besu is a creative design agency that based in Kuala Lumpur, Malaysia. 
                We design experience through story that builds brands, platforms that help businesses to win in digital culture.
              </strong>
            </p>
            <br/><br/>
            <p>
            Besu in a way has a meaning of ‘Not Lose’. We want to help SME to able to compete in the digital world. SMEs are different compare to large companies/corporates. They do not have billion dollar budgets, huge professional sales teams nor sophisticated quantitative analysis. But they are nimble, agile, and responsive to change. Their leaders have an exciting vision of what they want their business to be.
            </p>
            <br/><br/>
            <p>
            Combining our experience and expertise in business strategy and Brand Story, we have developed extremely profitable solution for SMEs operating in different industries and conditions.
            </p>
            <br/><br/>
            <p>
              Our primary aim is that our work immediately improves your bottom line. Our expertise is efficiency. We pride ourselves on our ability to develop superior solutions with the absolute minimum investment required.
            </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>Team</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="team-member">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIH1m0_TUhNhPEJP7LLrqQNlbPfq3GVDBUEaNPoRZiXhHVphQK" alt=""/>
              <div className="team-info">
                <p className="name">Lebron James</p>
                <p className="role">Project Manager & Business</p>
                <p className="contact hide">jiyong@besu.com | 014 - 439 9009</p>
                <p className="contact">jiyong@besu.com | 014 - 439 9009</p>
              </div>
            </div>
            <div className="team-member">
              <img src="https://cdn3.yoox.biz/cloud/karlwp/uploads/2018/01/Feature-Desktop-2.jpg" alt=""/>
              <div className="team-info">
                <p className="name">Lebron James</p>
                <p className="role">Project Manager & Business</p>
                <p className="contact hide">jiyong@besu.com | 014 - 439 9009</p>
                <p className="contact">jiyong@besu.com | 014 - 439 9009</p>
              </div>
            </div>
            <div className="team-member">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwETMfZeZvMtRUEKqSx_obCqoEB3rx8cBJajQFaYVuCccsqPa0" alt=""/>
              <div className="team-info">
                <p className="name">Lebron James</p>
                <p className="role">Project Manager & Business</p>
                <p className="contact hide">jiyong@besu.com | 014 - 439 9009</p>
                <p className="contact">jiyong@besu.com | 014 - 439 9009</p>
              </div>
            </div>
          </Grid.Column>
        </ Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>Process</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <ol className="process">
              <li>Understand and empathize with the users' life (consumer software) or work (business software) needs.</li>
              <li>First Concept - all about paper drawing and communicate.</li>
              <li>We don’t design for you. We design for human, for your users.</li>
              <li>We identifying your style.</li>
              <li>Time to get the hands dirty. </li>
              <li>We might make mistake, so your feedback is super important.</li>
              <li>Rocket Launched! Hooray. </li>
              <li>Not end yet, take what users said, and keep improving it!</li>
            </ol>
          </Grid.Column>
        </ Grid.Row>
        <Grid.Row>
          <Grid.Column width={4}>
            <p>Pricing</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <div className="pricing">
              <p>We charged a lots. Please don't call us if you don't have enough budgets.</p>
            </div>
          </Grid.Column>
        </Grid.Row>
      </div>
    </Layout>
  )
}

export default AboutPage
