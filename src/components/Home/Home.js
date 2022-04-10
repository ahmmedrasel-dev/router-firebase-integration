import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Home = () => {
  const [user] = useAuthState(auth)
  return (
    <div style={{ 'text-align': 'center' }}>
      <h1>Current User:</h1>
      <p>{user ? user.displayName : 'Not Available'}</p>
    </div>
  );
};

export default Home;