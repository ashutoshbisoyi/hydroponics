import React from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import * as Scroll from 'react-scroll';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import {
  logoutAdmin,
  logoutUser,
  selectAdminLoginStatus,
  selectUserLoginStatus,
} from '../../features/loginSlice';
import { useDispatch } from 'react-redux';
import { selectCartItems } from '../../features/cartSlice';
import { Badge } from '@mui/material';
let ScrollLink = Scroll.Link;
const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLoggedIn = useSelector(selectUserLoginStatus);
  const adminLoggedIn = useSelector(selectAdminLoginStatus);
  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(logoutAdmin());
    localStorage.setItem('itemsInCart', []);
    history.push('/login/user');
  };
  const currentRoute = useLocation().pathname;
  const itemsInCart = useSelector(selectCartItems);
  return (
    <nav className='navbar navbar-expand-lg navbar-light sticky-top'>
      <div className='container'>
        <h1 className='navbar-brand'>
          <img src={logo} alt='hydroponics house' className='img-fluid' />
        </h1>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto align-items-center'>
            {currentRoute !== '/' && (
              <li className='nav-item mx-2'>
                <NavLink to='/'>
                  <span className='nav-link active'>Home</span>
                </NavLink>
              </li>
            )}
            {currentRoute === '/' && (
              <li className='nav-item mx-2'>
                <ScrollLink
                  to='what-is-hydroponics'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span className='nav-link'>What is Hydroponics</span>
                </ScrollLink>
              </li>
            )}
            {currentRoute === '/' && (
              <li className='nav-item mx-2'>
                <ScrollLink
                  to='features'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <span className='nav-link'>Why Hydroponics</span>
                </ScrollLink>
              </li>
            )}

            {userLoggedIn && (
              <li className='nav-item mx-2'>
                <NavLink to='/shopping'>
                  <span className='nav-link'>Shopping</span>
                </NavLink>
              </li>
            )}
            {adminLoggedIn && (
              <li className='nav-item mx-2'>
                <NavLink to='/controls'>
                  <span className='nav-link'>Controls</span>
                </NavLink>
              </li>
            )}
            {userLoggedIn && (
              <li className='nav-item mx-2'>
                <NavLink to='/cart'>
                  <span className='nav-link'>
                    <Badge badgeContent={itemsInCart.length} color='secondary'>
                      <img src={cart} alt='cart' className='img-fluid' />
                    </Badge>
                  </span>
                </NavLink>
              </li>
            )}
            {!userLoggedIn && !adminLoggedIn && (
              <li className='nav-item mx-2'>
                <NavLink to='/login/user'>
                  <span className='nav-link'>
                    <button className='filled'>Sign In</button>
                  </span>
                </NavLink>
              </li>
            )}
            {(userLoggedIn || adminLoggedIn) && (
              <li className='nav-item mx-2'>
                <span className='nav-link'>
                  <button className='filled' onClick={handleLogout}>
                    Logout
                  </button>
                </span>
              </li>
            )}
            <li className='nav-item mx-2'>
              <span className='nav-link'>
                <button className='outlined'>Contact</button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
