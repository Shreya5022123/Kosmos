import React from 'react';
import { Link } from 'react-router-dom';
// import VirtualTryon from './VirtualTryOn.jsx'; // Import the Virtual Tryon file
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';

const ProductDisplay = (props) =>{
    const {product}=props;
    if (!product) return <div>Product not found</div>; // or some default fallback content
    return(
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.image} alt=''/>
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_dull_icon} alt=''/>
                    <p>122</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-prices-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-prices-new">₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
            
                </div>
                
                    <button><Link to="/VirtualTryOn">Virtual-Tryon</Link></button>
                
                <br/>
                <button>Add to Cart</button>
                <p className='productdisplay-right-category'><span>Tags:</span>Modern,Latest</p>
            </div>
          
        </div>
    )
}

export default ProductDisplay;