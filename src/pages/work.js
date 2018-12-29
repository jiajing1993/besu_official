import React from 'react'
import Layout from '../components/layout'
import Grid from '../components/style/grid'
import BigText from '../components/style/bigText'
import Jumbotron from '../components/style/jumbotron'
import { projects, projectTypes } from '../data'
import '../styles/work.scss'
import posed from 'react-pose'

const AnimatedContainer = posed.div({
  closed: { 
    y: "0px",
    transition: { duration: 800 } 
  },
  open: { 
    y: "200px",
    transition: { duration: 800 }
  }
});



const WorkList = ({ project }) => {
  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div className="work-item">
        <div className="work-image">
          <img src={project.image} alt=""/>
        </div>
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
  )
}

const WorkListWrapper = ({projects}) => {
  if (projects.length === 0) {
    return (
      <Grid.Column width={5}>
        <AnimatedContainer initialPose="open" pose="closed">
          <div className="work-item">
            <div className="work-image">
            </div>
            <p className="work-name">Unavailable for now</p>
          </div>
        </AnimatedContainer>
      </Grid.Column>
    )
  }else {
    return (
      projects.map((project) => {
        return (
          <Grid.Column width={5} key={project.id}>
            <AnimatedContainer initialPose="open" pose="closed">
              <WorkList project={project}/>
            </AnimatedContainer>
          </Grid.Column>
        )
      })
    )
  }
  
}


export default class WorkPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showedProject: projects,
      selected: 'All',
    }
  }

  handleClick = (status) => {
    this.setState({
      selected: status,
    })

    if (status === "All"){
      this.setState({
        showedProject: projects
      })
    }else {
      this.setState({
        showedProject: projects.filter( project => project.type.includes(status))
      })
    }
  }

  componentDidMount(){
    console.log(this.state.showedProject)
  }

  render() {
    return (
      <Layout>
        <Jumbotron>Work</Jumbotron>
        <div className="work-body">
          <BigText>We humanize brands, launch visions and clarify the complex.</BigText>
          <Grid.Row>
            <Grid.Column width={3}>
            <ul className="work-categories">
              {
                projectTypes.map((type, index) => {
                  return (
                    <li 
                      key={index} 
                      onClick={(e)=>this.handleClick(type)}
                      style={{
                        color: this.state.selected === type ? 'black' : ''
                      }}
                    >
                      {type}
                    </li>
                  )
                  
                })
              }
            </ul>
            </Grid.Column>
            <Grid.Column width={7}>
            <div className="work-lists">
              <Grid.Row>
                
                  <WorkListWrapper projects={this.state.showedProject}/>
                
                
              </Grid.Row>
              </div>
            </Grid.Column>
          </Grid.Row>
        </div>
      </Layout>
    )
  }
}
