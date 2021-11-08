import React from 'react';
import { Link } from 'react-router-dom';
import noData from '../../assets/empty-cart.png';
const ErrorMessage = () => {
  return (
    <div className='text-center py-5'>
      <img
        src={noData}
        alt='empty cart'
        className='img-fluid'
        style={{ maxWidth: '300px' }}
      />
      <p className='text-secondary fs-5'>Oops! No items in your basket</p>
      <Link to='/shopping'>
        <button className='filled'>Start Shopping</button>
      </Link>
    </div>
  );
};

export default ErrorMessage;
