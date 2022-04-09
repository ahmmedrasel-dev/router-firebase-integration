import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css'

const Header = () => {
  const { user, userSignOut } = useFirebase()
  return (
    <div className='header'>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/orders'>Orders</Link>
        <Link to='/reviews'>Reviews</Link>
        <Link to='/register'>Register</Link>
        <span>{user?.displayName && user.displayName} </span>
        {user?.uid ?
          <span><button onClick={userSignOut}>Sign Out</button> </span>
          : <Link to='/login'>Login</Link>}
      </nav>
    </div>
  );
};

export default Header;