import React, { PropTypes } from 'react'
import { inputPropTypes } from '../../constants/InputPropTypes'
import './Input.css'

const Input = ({
  type, value, onBlur, onFocus, onChange, onKeyDown, name, readOnly,
  required, placeholder, style, className, isValid, id, disabled, autoFocus,
}) => {
  const classes = [
    'Input',
    className,
    isValid === false ? 'invalid' : '',
    readOnly ? 'readOnly' : '',
  ].join(' ')

  return (
    <input
      required={required}
      type={type}
      placeholder={placeholder}
      value={value}
      style={style}
      onFocus={onFocus}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className={classes}
      disabled={disabled}
      autoFocus={autoFocus}
      name={name}
      id={id}
    />
  )
}

Input.propTypes = {
  ...inputPropTypes,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  readOnly: PropTypes.bool,
}

Input.defaultProps = {
  isValid: true,
  autoFocus: false,
  readOnly: false,
}

Input.displayName = 'Input'

export default Input
