import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import CartItem from '../../components/cart-item/CartItem';
import ErrorMessage from '../../components/error-message/ErrorMessage';
import HomeCarousel from '../../components/home-carousel/HomeCarousel';
import { selectCartItems } from '../../features/cartSlice';
import { selectUserLoginStatus } from '../../features/loginSlice';

const Cart = () => {
  const isUserLoggedIn = useSelector(selectUserLoginStatus);
  const totalItemsInCart = useSelector(selectCartItems);
  const history = useHistory();

  if (!isUserLoggedIn) {
    history.push('/login/user');
  }
  return (
    <div>
      <HomeCarousel />
      <div className='container pt-5'>
        <h3>You have {totalItemsInCart.length} in your Basket</h3>
        <p className='text-secondary mt-3'>
          You can always add, delete or manipulate item quantity in your basket
          items
        </p>
        {totalItemsInCart.length > 0 ? (
          <div>
            {totalItemsInCart.map((value, index) => (
              <CartItem {...value} key={index} />
            ))}
          </div>
        ) : (
          <ErrorMessage />
        )}
      </div>
    </div>
  );
};

export default Cart;
