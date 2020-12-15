import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom'

const MODAL_STYLE = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'white',
  zIndex: 2000,
  width: '70%'
}

const MODAL_OVERLAY = {
  position: 'absolute',
  background: 'rgba(0, 0, 0, 0.7)',
  left: 0,
  right: 0,
  top:0,
  bottom:0,
  zIndex: 1000
}

const Modal = ({ isOpen, children, onClose }) => {
  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <>
    <div style={MODAL_STYLE}>
      <button onClick={onClose}>close</button>
      {children}
    </div>
    <div style={MODAL_OVERLAY}></div>
    </>,
    document.getElementById('portal')
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
}

export default Modal;
