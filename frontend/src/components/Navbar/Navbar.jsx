import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Kosmos</p>
      </div>
      <div className='nav-centre-1'>
        <ul className='nav-menu-2'>
          <li>Shop</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
      </div>
      <div className="nav-center">
        <ul className="nav-menu-2">
          <li>Go Live</li>
          <li>Metaverse</li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <button>login</button>
        <img src={cart_icon} alt="" />
      </div>
    </div>
  );
};

export default Navbar;