// Product.jsx
import React from 'react';
import { useContext } from 'react';
import { ShopcContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { all_product } = useContext(ShopcContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product} /> 
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;