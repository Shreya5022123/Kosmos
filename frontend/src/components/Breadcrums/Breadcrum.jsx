// Breadcrum.jsx
import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
    if (!product) return null; // or some default fallback content
    return (
      <div className='breadcrum'>
        HOME<img src={arrow_icon} alt=''/>SHOP<img src={arrow_icon} alt=''/>{product.category}<img src={arrow_icon} alt=''/>{product.name}
      </div>
    );
  };

export default Breadcrum;