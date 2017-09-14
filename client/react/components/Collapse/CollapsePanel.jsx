// external imports
import React from 'react'
// internal imports

const CollapsePanel = ({ collapsed, children, orientation }) => {
  const collapsedClass = (collapsed ? 'collapsed' : '')
  return (
    <div>
      <div className={`collapse-panel ${orientation} ${collapsedClass}`}>
        {children}
      </div>
    </div>
  )
}

CollapsePanel.defaultProps = {
  orientation: 'vertical',
}

export default CollapsePanel
