import React from 'react';
import './Footer.scss';
import logo from '../../assets/logo.png';
const Footer = () => {
  return (
    <footer className='container-fluid footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <img
              src={logo}
              alt='hydroponics house'
              className='img-fluid logo'
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              rem, quibusdam nulla quisquam, harum nisi odio fugiat, eius dolor
              sint libero ullam unde ipsa tempora aliquam fuga inventore
              repudiandae reprehenderit.
            </p>
            <p>© All rights reserved 2021</p>
          </div>
          <div className='col-12 col-md-1'></div>
          <div className='col-12 col-md-4'>
            <h4>Write Us</h4>
            <div className='mb-3'>
              <label className='form-label'>Your Name</label>
              <input
                type='email'
                className='form-control'
                placeholder='Rahul Goyel'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Your Message</label>
              <textarea className='form-control' rows='3'></textarea>
            </div>
          </div>
          <div className='col-12 col-md-3'>
            <h4>Quick Links</h4>
            <ul>
              <li>What is Hydroponics</li>
              <li>Advantages</li>
              <li>Shopping</li>
              <li>Blogs</li>
              <li>What is Hydroponics</li>
              <li>Advantages</li>
              <li>Shopping</li>
              <li>Blogs</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
