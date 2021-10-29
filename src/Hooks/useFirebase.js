import firebaseInit from "../Components/Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInit();
const auth = getAuth();

const useFirbase = () => {
  const [user, setUser] = useState("");
  const googleSignIn = () => {
    const GoogleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, GoogleProvider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  }, []);

  const signOutGoogle = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };
  return {
    googleSignIn,
    user,
    signOutGoogle,
    setUser,
  };
};

export default useFirbase;
