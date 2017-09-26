import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Input from './Input'
import Button from '../Button/Button'

const SearchInput = ({ buttonLabel, onClick, link, placeholder, onChange, value }) => {
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
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
      {button}
    </div>
  )
}


SearchInput.propTypes = {
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

SearchInput.displayName = 'SearchInput'

export default SearchInput
