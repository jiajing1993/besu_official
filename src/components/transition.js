import React from 'react'
import posed, { PoseGroup } from 'react-pose'

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props
    const RoutesContainer = posed.div({
      enter: { opacity: 1 },
      exit: { opacity: 0 }
    })

    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>
          {children}
        </RoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition