import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  padding: 20px 10%;
  display: flex;
  width: 100%; 
  align-content: space-around;
  p {
    width: 50%;
    font-size: 12px;
    letter-spacing: 2px;
    color: #4a4a4a;
    a {
      color: inherit;
      &:hover {
        color: ${props => props.theme.gold};
      }
    }
    &:first-child {
      text-align: left;
    }
    &:last-child {
      text-align: right;
    }
  }
`

const Footer = ({ info }) => (
  <FooterWrapper>
    <p>
      <a href="mailto:jiajing@besu.asia">jiajing@besu.asia</a>
      &nbsp;|&nbsp; 
      <a href="tel:0185754123">018-575 4123</a>
    </p>
    <p>© Besu</p>
  </FooterWrapper>
)

export default Footer