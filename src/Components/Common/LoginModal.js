import React from 'react';
import {FaTimes} from 'react-icons/fa';

const LoginModal = ({children, handleClose}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-text">
      <FaTimes onClick={handleClose} className="text-start"/>
        {children}
      </div>
    </div>
  );
};

export default LoginModal;
