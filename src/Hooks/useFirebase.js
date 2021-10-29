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
  const [isLoading, setIsLoading] = useState(true);
  const googleSignIn = () => {
    setIsLoading(true);
    const GoogleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, GoogleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const signOutGoogle = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setIsLoading(false);
      })
      .catch((error) => {});
  };
  return {
    googleSignIn,
    user,
    signOutGoogle,
    setUser,
    setIsLoading,
    isLoading,
  };
};

export default useFirbase;
