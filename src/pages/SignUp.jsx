import { FcGoogle } from "react-icons/fc";
import React from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";
import Loader from "../utils/Loader";
const SignUP = () => {
  let { user, loading } = useAuthContext();
  let navigate = useNavigate();
  const signIn = () => {
    let googleAuthprovider = new GoogleAuthProvider();
    signInWithRedirect(auth, googleAuthprovider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  if (!user && loading) {
    return (
      <>
        <div className="loader-container">
          <Loader />
          <p>Already signed in redirecting to Homepage:)</p>
        </div>
      </>
    );
  }
  return (
    <div className="container-auth">
      <button className="signin-btn" onClick={signIn}>
        <FcGoogle /> signIn with google
      </button>
    </div>
  );
};

export default SignUP;
