import React from 'react';
import { Link } from 'react-router-dom';
import './ShopBanner.scss';
const ShopBanner = () => {
  return (
    <div className='shop-banner'>
      <Link to='/shopping'>
        <button className='filled'>Start Shopping</button>
      </Link>
    </div>
  );
};

export default ShopBanner;
