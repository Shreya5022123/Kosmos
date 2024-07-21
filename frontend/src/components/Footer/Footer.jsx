import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-logo'>
          <img src={footer_logo} alt='' />
          <p>SHOPER</p>
        </div>
        <div className='footer-social-icon'>
          <div className="footer-icon-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={pintester_icon} alt="" />
          </div>
          <div className="footer-icon-container">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-links'>
          <ul className="footer-links-list">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>© 2024 www.kosmos.com. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;