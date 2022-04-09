import { useEffect, useState } from 'react';
import { FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import app from '../firebase.init';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const useFirebase = () => {
  const [user, setUser] = useState({})
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(Result => {
        setUser(Result.user);
      })
  }

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setUser(user)
    })
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => { })
  }

  const signInWithFacebook = () => {
    signInWithPopup(auth, facebookProvider)
      .then(result => {
        setUser(result.user);
      })
  }


  return { user, signInWithGoogle, userSignOut, signInWithFacebook };
};

export default useFirebase;