import React from 'react';
import './Navbar.css';
import logo from '../../Media/Oceangrsmith_logo.png';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <div className="nav-logo">
          <img src={logo} alt="Website logo" />
        </div>
        <div className="nav-link-items">
          <li className="nav-link">Home</li>
          <li className="nav-link">Find a Locker</li>
          <li className="nav-link">Size Guide</li>
          <li className="nav-link">Locations</li>
          <li className="nav-link">Help Center</li>
        </div>
        <div className="nav-link-items">
          <li className="nav-link">My Account</li>
          <li className="nav-link">080-188-0872</li>
          <button className="nav-btn">PAY YOUR BILL</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
