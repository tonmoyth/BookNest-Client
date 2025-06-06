import React, { useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.cofig";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  
  const [user,setUser] = useState(null);

    // user create email and password
    const userCreateEmailAndPass = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // user sign up with google
    const userSignUpGoogle = () => {
      return signInWithPopup(auth,provider)
    }

    // sign Out user 
    const userSignOut = () => {
      return signOut(auth)
    }

    // user sign in
    const userSignIn = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password)
    }

    // onAuthStateChange 
    useEffect(()=> {
      const unsubscribe = onAuthStateChanged(auth, (currentUser => {
        setUser(currentUser)
      }))

      return () => {
        unsubscribe()
      }
    },[])


  const authInfo = {
    user,
    setUser,
    userCreateEmailAndPass,
    userSignOut,
    userSignUpGoogle,
    userSignIn
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
