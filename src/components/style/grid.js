import React, { Component } from 'react';
import styled from 'styled-components'

const GridRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${props => props.marginBottom}px;
`

const GridColumn = styled.div`
  width: ${props => props.width * 10}%;
`

export default class Grid extends Component {
  static Row = (props) => <GridRow marginBottom={props.marginBottom}>{props.children}</GridRow>;
  static Column = (props) => <GridColumn width={props.width}>
    {props.children}
  </GridColumn>;

}