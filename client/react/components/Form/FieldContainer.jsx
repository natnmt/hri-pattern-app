import React, { PropTypes } from 'react'
import './FieldContainer.css'

const FieldContainer = ({ children, className }) => (
  <div className={['FieldContainer', className].join(' ')}>
    {children}
  </div>
)

FieldContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]),
  className: PropTypes.string,
}

FieldContainer.displayName = 'FieldContainer'

export default FieldContainer
