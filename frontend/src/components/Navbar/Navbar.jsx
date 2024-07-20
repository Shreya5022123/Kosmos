import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Kosmos</p>
      </div>
      <div className='nav-centre-1'>
        <ul className='nav-menu-2'>
          <li><Link to='/'>Shop</Link></li>
          <li><Link to='/Mens'>Mens</Link></li>
          <li><Link to='/Womens'>Women</Link></li>
          <li><Link to='/Kids'>Kids</Link></li>
        </ul>
      </div>
      <div className="nav-center-2">
        <ul className="nav-menu-2">
          <li>Go Live</li>
          <li>Metaverse</li>
        </ul>
      </div>
      <div className="nav-login-cart">
      <Link to='/Login'><button>login</button></Link>
      <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;