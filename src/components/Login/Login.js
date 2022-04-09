import React from 'react';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
  const { signInWithGoogle, signInWithFacebook } = useFirebase()
  return (
    <div className='login'>
      <div className="login-form">
        <h3>Please Login</h3>
        <form>
          <input type="email" placeholder='Your Email address' />
          <input type="password" placeholder='Enter password' />
          <input type="submit" value="Login" />
          <p>Or</p>
        </form>
        <button onClick={signInWithGoogle} className='google-login'>Login with Google</button>
        <button onClick={signInWithFacebook} className='facebook-login'>Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;