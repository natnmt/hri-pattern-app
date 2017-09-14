import React, { PropTypes } from 'react'
import Icon from '../Icon/Icon'
import './Button.css'

const Button = ({
  className, disabled, icon, iconPosition, id, onClick, children, secondaryColor,
}) => {
  const iconDrawn = icon ? <Icon glyph={icon} /> : null
  return (
    <button
      className={[
        'Button',
        secondaryColor ? 'switched' : '',
        className,
      ].join(' ')}
      disabled={disabled}
      id={id}
      type="button"
      onClick={onClick}
      data-hasJustIcon={Boolean(icon) && !children}
      data-iconPosition={iconPosition}
    >
      {(iconPosition === 'left') ? iconDrawn : null}
      {children ? <span className={'ButtonText'}>{children}</span> : null}
      {(iconPosition === 'right') ? iconDrawn : null}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array, PropTypes.string]),
  className: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  id: PropTypes.string,
  onClick: PropTypes.func,
  secondaryColor: PropTypes.bool,
}

Button.defaultProps = {
  className: '',
  disabled: false,
  iconPosition: 'left',
  switchColor: false,
}

Button.displayName = 'Button'

export default Button
