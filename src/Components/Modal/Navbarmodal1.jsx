// Modal.js
import React from 'react';
import './Navbarmodal1.css'; // Import your modal styles if needed
import { IoMdClose } from "react-icons/io";

const NavbarModal1 = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default NavbarModal1;
