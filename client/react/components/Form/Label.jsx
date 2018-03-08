import React, { PropTypes } from 'react'
import './Label.css'

const Label = ({ children, className, id, type, value }) => {
  const classNames = [
    'label',
    `${type}Label`,
    className,
  ].join(' ')

  return (
    <label
      className={classNames}
      id={id}
    >
      {children}
      {value}
    </label>
  )
}

Label.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]),
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf(['button', 'toggle', 'error', 'input', 'menu']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

Label.defaultProps = {
  className: '',
  type: 'input',
}

Label.displayName = 'Label'

export default Label
