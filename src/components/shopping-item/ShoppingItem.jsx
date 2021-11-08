import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './ShoppingItem.scss';
import { Alert, Snackbar } from '@mui/material';
import Slide from '@mui/material/Slide';
import { addItemToCart } from '../../features/cartSlice';

function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const ShoppingItem = ({ name, price, image, id }) => {
  const [modal, setModal] = useState({
    visibility: false,
    itemName: '',
  });
  const dispatch = useDispatch();
  const handleAddToPlate = (id) => {
    setModal({
      visibility: true,
      itemName: name,
    });
    dispatch(
      addItemToCart({
        id: id,
        name: name,
        price: price,
        image: image,
        quantity: 1,
      })
    );
  };
  const handleClose = () => {
    setModal({
      ...modal,
      visibility: false,
    });
  };
  return (
    <>
      <Snackbar
        open={modal.visibility}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionComponent={SlideTransition}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          {modal.itemName} added to basket
        </Alert>
      </Snackbar>
      <div className='shopping-item'>
        <div
          className='image'
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className='title-price'>
          <h5>{name}</h5>
          <span>₹{price}</span>
        </div>
        <div>
          <button className='filled' onClick={() => handleAddToPlate(id)}>
            Add to Basket
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingItem;
