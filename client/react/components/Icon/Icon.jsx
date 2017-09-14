import React, { PropTypes } from 'react'
import Glyphs from './Glyphs'
import './Icon.css'

const Icon = ({ className, glyph }) => {
  const selectedGlyph = Glyphs[glyph]
  return (
    <div className={['Icon', className].join(' ')}>
      {selectedGlyph}
    </div>
  )
}

Icon.propTypes = {
  className: PropTypes.string,
  glyph: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  className: '',
}

Icon.displayName = 'Icon'

export default Icon
