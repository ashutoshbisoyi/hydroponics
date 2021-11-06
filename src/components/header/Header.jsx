import React from 'react';
import './Header.scss';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
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
            <li className='nav-item mx-2'>
              <span className='nav-link active'>Home</span>
            </li>
            <li className='nav-item mx-2'>
              <Link
                to='what-is-hydroponics'
                spy={true}
                smooth={true}
                duration={500}
              >
                <span className='nav-link'>What is Hydroponics</span>
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <Link
                to='features'
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <span className='nav-link'>Why Hydroponics</span>
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <span className='nav-link'>Shopping</span>
            </li>
            <li className='nav-item mx-2'>
              <span className='nav-link'>
                <img src={cart} alt='cart' className='img-fluid' />
              </span>
            </li>
            <li className='nav-item mx-2'>
              <span className='nav-link'>
                <button className='filled'>Sign In</button>
              </span>
            </li>
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
