import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import ShoppingItem from '../../components/shopping-item/ShoppingItem';
import ShoppingData from '../../data/ShoppingData';
import { selectUserLoginStatus } from '../../features/loginSlice';

const Shopping = () => {
  const isUserLoggedIn = useSelector(selectUserLoginStatus);
  const history = useHistory();
  if (!isUserLoggedIn) {
    history.push('/login/user');
  }
  return (
    <div className='container shopping pt-5'>
      <h2>Shop Hydroponics Products</h2>
      <p className='text-secondary mt-3'>
        Best in Quality | 100% Safe | Home Grown
      </p>
      <div className='row mt-5'>
        {ShoppingData.map((value, index) => (
          <div className='col-12 col-md-3' key={index}>
            <ShoppingItem {...value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
