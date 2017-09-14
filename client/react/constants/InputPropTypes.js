import { PropTypes } from 'react'

export const inputPropTypes = {
  type: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isValid: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
  id: PropTypes.string,
  forceValidation: PropTypes.bool,
  autoFocus: PropTypes.bool,
  name: PropTypes.string,
}
