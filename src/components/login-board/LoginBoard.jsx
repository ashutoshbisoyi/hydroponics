import {
  Grid,
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
} from '@mui/material';
import React, { useState } from 'react';
import './LoginBoard.scss';
import { Link, useHistory } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { loginAdmin, loginUser } from '../../features/loginSlice';

const LoginBoard = ({ userType }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState({
    password: false,
  });
  const [inputDetails, setInputDetails] = useState({
    username: '',
    password: '',
  });

  // const [errors, setErrors] = useState({});

  const handleChange = (prop) => (event) => {
    setInputDetails({ ...inputDetails, [prop]: event.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword({
      ...showPassword,
      password: !showPassword.password,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userType, inputDetails);
    if (
      userType === 'user' &&
      inputDetails.username === 'user' &&
      inputDetails.password === 'userpassword'
    ) {
      alert('User login Success');
      history.push('/cart');
      dispatch(loginUser());
    } else if (
      userType === 'admin' &&
      inputDetails.username === 'admin' &&
      inputDetails.password === 'adminpassword'
    ) {
      alert('admin login success');
      history.push('/controls');
      dispatch(loginAdmin());
    } else {
      alert('wrong creds');
    }
  };
  return (
    <Paper elevation={0} className='py-4 px-3 login-board'>
      <div className='title-container'>
        <h3>{userType} Login</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4} className='my-3'>
          <Grid item xs={12}>
            <TextField
              label='Enter Username / E-Mail '
              variant='standard'
              fullWidth
              onChange={handleChange('username')}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth variant='standard' className='mb-3'>
              <InputLabel htmlFor='standard-adornment-password'>
                Password
              </InputLabel>
              <Input
                id='standard-adornment-password'
                name
                type={showPassword.password ? 'text' : 'password'}
                value={inputDetails.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword.password ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </Grid>
        <input
          type='submit'
          style={{ position: 'absolute', left: '-9999px' }}
        />
      </form>
      <Link to='/forgotpassword' className='link'>
        Forgot your Password?
      </Link>

      <div className='bottom-container mt-4'>
        <button className='filled' onClick={handleSubmit}>
          Login to your Account
        </button>

        <div className='mt-3'>
          {userType === 'user' ? (
            <p>
              Are you admin?{' '}
              <Link to='/login/admin' className='link'>
                Admin Login
              </Link>
            </p>
          ) : (
            <p>
              Are you a user?{' '}
              <Link to='/login/user' className='link'>
                User Login
              </Link>
            </p>
          )}
        </div>
      </div>
    </Paper>
  );
};
export default LoginBoard;
