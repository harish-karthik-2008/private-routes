import React from 'react'

export default function Modal({ message }) {
  return (
    <div className="modal-popup" role="dialog" aria-live="assertive">
      <div className="modal-box">{message}</div>
    </div>
  )
}