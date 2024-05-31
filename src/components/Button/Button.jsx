import React from 'react'
import './Button.css'

function Button({ type }) {
  const text = {
    edit: 'Edit',
    delete: 'Delete'
  };

  return (
    <div className={`btn-${type}`}>{text[type]}</div>
  )
}

export default Button