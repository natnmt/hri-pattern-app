import React, { PropTypes } from 'react'
import './Input.css'

const TextArea = (props) => (
  props.readOnly ? (
    <span className="readOnly">{props.value}</span>
  ) : (
    <textarea
      className={['Input', 'TextArea', props.className].join(' ')}
      placeholder={props.placeholder}
      value={props.value}
      rows={props.rows}
      cols={props.cols}
      disabled={props.disabled}
      required={props.required}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      id={props.id}
      autoFocus={props.autoFocus}
    />
  )
)

TextArea.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  readOnly: PropTypes.bool,
  className: PropTypes.string,
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
  className: '',
}

TextArea.displayName = 'TextArea'

export default TextArea
