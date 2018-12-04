import React from 'react'
import posed, { PoseGroup } from 'react-pose'

class Transition extends React.Component {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: { opacity: 1, delay: 1000, delayChildren: 1000 },
      exit: { opacity: 0 },
    });

    // To enable page transitions on mount / initial load,
    // use the prop `animateOnMount={true}` on `PoseGroup`.
    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition