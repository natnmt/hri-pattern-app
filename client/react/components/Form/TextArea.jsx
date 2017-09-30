import React, { PropTypes } from 'react'
import './Input.css'

const TextArea = ({
  placeholder, value, rows, cols, readOnly, disabled, required, onChange, onFocus, onBlur, id, autoFocus,
}) => (
  <textarea
    className={[
      'Input',
      'TextArea',
      readOnly ? 'readOnly' : '',
    ].join(' ')}
    placeholder={placeholder}
    value={value}
    rows={rows}
    cols={cols}
    disabled={disabled}
    required={required}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    id={id}
    autoFocus={autoFocus}
  />
)

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  id: PropTypes.string,
  autoFocus: PropTypes.bool,
}

TextArea.defaultProps = {
  rows: 10,
  cols: 40,
  readOnly: false,
  required: false,
  disabled: false,
  autoFocus: false,
}

TextArea.displayName = 'TextArea'

export default TextArea
