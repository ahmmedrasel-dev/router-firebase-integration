import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const auth = getAuth(app)
const Login = () => {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const { signInWithFacebook } = useFirebase()

  const from = location?.state?.from?.pathname || '/';

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then(() => {
        navigate(from, { replace: true })
      })
  }
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
        <button onClick={handleGoogleSignIn} className='google-login'>Login with Google</button>
        <button onClick={signInWithFacebook} className='facebook-login'>Login with Facebook</button>
      </div>
    </div>
  );
};

export default Login;