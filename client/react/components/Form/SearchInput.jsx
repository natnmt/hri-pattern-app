import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import Button from '../Button/Button'

class SearchInput extends Component {
  static propTypes = {
    buttonLabel: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  }

  constructor() {
    super()
    this.state = {
      value: '',
    }
  }
  handleInputChange = (value) => {
    this.setState({ value })
  }
  render = () => {
    const { buttonLabel, onClick, link, placeholder } = this.props
    const { value } = this.state
    const buttonEl = (
      <Button
        onClick={() => onClick(value)}
        value="Search"
        icon="search"
        iconPosition="right"
        disabled={value.length === 0}
      >
        {buttonLabel}
      </Button>
    )
    const button = link && value.length > 0 ? (
      <Link to={link}>{buttonEl}</Link>
    ) : buttonEl
    return (
      <div className="SearchInput">
        <Input
          type="text"
          value={value}
          onChange={(event) => this.handleInputChange(event.target.value)}
          placeholder={placeholder}
        />
        {button}
      </div>
    )
  }
}

SearchInput.displayName = 'SearchInput'

export default SearchInput
