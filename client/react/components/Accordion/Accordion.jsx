import React, { Component, PropTypes } from 'react'
import Icon from '../Icon/Icon'
import './Accordion.css'

const ACCORDION_TRANSITION_TIME = 300

class Accordion extends Component {

  static propTypes = {
    startsExpanded: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]),
  }

  constructor({ startsExpanded = false }) {
    super()
    this.state = {
      expanded: startsExpanded,
      finishedTransition: true,
    }
  }

  toggle = () => {
    this.setState({ expanded: !this.state.expanded })
    this.updateTransitionState(false)
  }

  updateTransitionState = (finishedTransition) => {
    this.setState({
      finishedTransition,
    })
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => this.setState({
      finishedTransition: !finishedTransition,
    }), ACCORDION_TRANSITION_TIME)
  }

  render = () => {
    const { expanded, finishedTransition } = this.state
    const { title, children } = this.props

    const content = !expanded && finishedTransition ? null : children
    const className = [
      'Accordion',
      expanded ? 'expanded' : '',
      expanded && finishedTransition ? 'visible' : '',
    ].join(' ')

    return (
      <div
        ref={obj => { this.container = obj }}
        className={className}
      >
        <div className="title" onClick={this.toggle}>
          {title}
          <Icon className="accordionIcon" glyph="arrow" />
        </div>
        <div className="content">
          {content}
        </div>
      </div>
    )
  }
}

Accordion.displayName = 'Accordion'

export default Accordion
