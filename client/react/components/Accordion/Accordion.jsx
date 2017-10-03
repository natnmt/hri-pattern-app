import React, { Component, PropTypes } from 'react'
import Icon from '../Icon/Icon'
import './Accordion.css'

const ACCORDION_TRANSITION_TIME = 300
const HEADER_HEIGHT = 35
const CONTENT_EXTRA_HEIGHT = HEADER_HEIGHT + 25

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
      contentHeight: 0,
      maxHeight: 0,
    }
  }

  componentDidMount = () => {
    if (this.state.expanded) {
      const height = this.content.getBoundingClientRect().height + CONTENT_EXTRA_HEIGHT
      this.setState({ maxHeight: height, contentHeight: height })
    }
    else {
      this.setState({ maxHeight: HEADER_HEIGHT })
    }
  }

  componentDidUpdate = () => {
    const height = this.content.getBoundingClientRect().height + CONTENT_EXTRA_HEIGHT
    if (this.state.expanded && height !== this.state.maxHeight) {
      this.setState({ maxHeight: height, contentHeight: height })
    }
  }

  toggle = () => {
    this.setState({ expanded: !this.state.expanded })
    if (!this.state.expanded) {
      this.setState({ maxHeight: this.state.contentHeight })
    }
    else {
      this.setState({ maxHeight: HEADER_HEIGHT })
    }
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
    const { expanded, finishedTransition, maxHeight } = this.state
    const { title, children } = this.props

    const content = !expanded && finishedTransition ? null : children
    const className = [
      'Accordion',
      expanded ? 'expanded' : '',
      expanded && finishedTransition ? 'visible' : '',
    ].join(' ')

    return (
      <div
        className={className}
        style={{maxHeight: `${maxHeight}px`}}
      >
        <div className="title" onClick={this.toggle}>
          {title}
          <Icon className="accordionIcon" glyph="arrow" />
        </div>
        <div className="content" ref={obj => { this.content = obj }}>
          {content}
        </div>
      </div>
    )
  }
}

Accordion.displayName = 'Accordion'

export default Accordion
