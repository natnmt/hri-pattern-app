import React, { PropTypes } from 'react'
import './Spinner.css'

const Spinner = ({ isVisible, width, height }) => {
  const spinnerClassName = [
    'Spinner',
    isVisible ? '' : 'hide',
  ].join(' ')
  const dimensionStyle = { width, height }
  return (
    <div className={spinnerClassName} style={dimensionStyle}>
      <div className="content initSpin" style={dimensionStyle}>
        <div className="spinnerIcon">
          <svg width={width} height={height} viewBox="-75 -75 150 150">
            <circle cx="0" cy="0" r="37.5" />
          </svg>
        </div>
      </div>
    </div>
  )
}

Spinner.propTypes = {
  isVisible: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
}

Spinner.defaultProps = {
  isVisible: true,
  spin: true,
  width: 30,
  height: 30,
}

Spinner.displayName = 'Spinner'

export default Spinner
