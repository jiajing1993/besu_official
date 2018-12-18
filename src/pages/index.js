import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const Home = styled.div`
  display: flex;
  min-height: calc(100vh - 60px);
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0;
  padding: 150px 0px;
  box-sizing: border-box;
`

const JumbotronText = styled.section`
  width: 70%;
  padding-right: 10%;
  p.title-bg {
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 2.3px;
    text-transform: uppercase;
    span {
      color: #daa520;
    }
  }
`;

const Nav = styled.nav`
  width: 30%;
  text-align: right;
  a {
    display: inline-block;
    color: ${props => props.theme.black};
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    line-height: 1.4;
    margin: 10px;
    transition: all 0.4s;
    &:hover {
      color: ${props => props.theme.gold};
      box-shadow: 0px 3px 0px rgba(${props => props.theme.goldRGB}, 1)
    }
  }
  @media only screen and (max-width: 600px) {
    width: 40%;
    text-align: left;
    padding: 20px 0;
  }
`;

const IndexPage = () => (
  <Layout>
    <Home>
      <JumbotronText>
        <p className="title-bg">We Design <span>Brand Experience</span> To Help & <span>Grow Your Business</span></p>
      </JumbotronText>
      <Nav>
        <div><Link to="/value/">Value</Link></div>
        <div><Link to="/work/">Work</Link></div>
        <div><Link to="/about/">About</Link></div>
      </Nav>
    </Home>
  </Layout>
)

export default IndexPage
