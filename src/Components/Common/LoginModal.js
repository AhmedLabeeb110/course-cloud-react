import React from 'react';
import {FaTimes} from 'react-icons/fa';

const LoginModal = ({children, handleClose}) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-text">
        {children}
        <FaTimes onClick={handleClose}/>
      </div>
    </div>
  );
};

export default LoginModal;
