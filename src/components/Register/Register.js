import React from 'react';
import './Register.css'

const Register = () => {
  return (
    <div className='register'>
      <div className="register-form">
        <h3>Please Register</h3>
        <form>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email address' />
          <input type="password" placeholder='Enter password' />
          <input type="submit" value="Register" />
        </form>
      </div>
    </div>
  );
};

export default Register;