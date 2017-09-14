// external imports
import React from 'react'
// internal imports

const CollapseHeader = ({ onClickAction, children, cssClass }) => (
  <div className={`collapse-header ${cssClass}`} onClick={onClickAction}>
    {children}
  </div>
)

CollapseHeader.defaultProps = {
  cssClass: '',
}

export default CollapseHeader
