import React from 'react';
import './SignIn.scss';
import LoginBoard from '../../components/login-board/LoginBoard';
import cover1 from '../../assets/gallery1.jpg';
import cover2 from '../../assets/gallery2.jpg';
const SignIn = ({ match }) => {
  const { userType } = match.params;
  return (
    <div className='container sign-in'>
      <div className='row'>
        <div
          className='col-12 col-md-6 image'
          style={{
            backgroundImage: `url(${userType === 'user' ? cover1 : cover2})`,
          }}
        ></div>
        <div className='col-12 col-md-6 d-flex align-items-center'>
          <LoginBoard userType={userType} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
