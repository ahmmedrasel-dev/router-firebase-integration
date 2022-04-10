import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'

const auth = getAuth(app);
const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <div className='header'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/orders'>Orders</Link>
        <Link to='/reviews'>Reviews</Link>
        <Link to='/register'>Register</Link>
        <span>{user?.displayName && user.displayName} </span>
        {user?.uid ?
          <span><button onClick={() => signOut(auth)}>Sign Out</button> </span>
          : <Link to='/login'>Login</Link>}
      </nav>
    </div>
  );
};

export default Header;