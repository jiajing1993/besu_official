import React, { Component } from 'react';
import posed, { PoseGroup } from 'react-pose';

class Transition extends Component {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: { opacity: 1, delay: 500, delayChildren: 500 },
      exit: { opacity: 0 },
    });

    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;