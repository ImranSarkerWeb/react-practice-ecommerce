import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const UserContext = createContext(null);

const auth = getAuth(app);

const ContextProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const contextInfo = {
    user,
    createUser,
    signIn,
    logOut,
  };
  return (
    <UserContext.Provider value={contextInfo}>{children}</UserContext.Provider>
  );
};

export default ContextProviders;
