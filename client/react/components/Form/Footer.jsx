import React, { PropTypes } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './Footer.css'

const Footer = ({ cancelLabel, onCancel, confirmLabel, onConfirm, readOnly }) => {
  const confirmButton = readOnly ? null : (
    <Button onClick={onConfirm}>
      {confirmLabel}
    </Button>
  )
  return (
    <div className="footer">
      <Link to="/">
        <Button onClick={onCancel} secondaryColor >
          {cancelLabel}
        </Button>
      </Link>
      {confirmButton}
    </div>
  )
}

Footer.propTypes = {
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  readOnly: PropTypes.bool,
}

Footer.displayName = 'Footer'

export default Footer
