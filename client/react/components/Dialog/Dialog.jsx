import React from 'react'
import Button from '../Button/Button'
import './Dialog.css'

const Dialog = ({ title, children, visibility, onClose, onCancel, cancelLabel, onConfirm, confirmLabel }) => {
  const dialog = visibility ? (
    <div className="dialog">
      <div className="content">
        <div className="header">
          {title}
          <div className="close" onClick={onClose}>x</div>
        </div>
        <div className="body">
          {children}
        </div>
        <div className="footer">
          <div className="button-container">
            <Button secondaryColor onClick={onCancel}>{cancelLabel}</Button>
            <Button onClick={onConfirm}>{confirmLabel}</Button>
          </div>
        </div>
      </div>
    </div>
  ) : null
  return (
    <div>
      {dialog}
    </div>
  )
}

export default Dialog
