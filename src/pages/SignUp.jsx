import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container-auth">
      <h3>welcome To Fitness App</h3>
      <h2>signIn for Best experince</h2>
      <button className="signin-btn" onClick={() => loginWithRedirect()}>
        <FcGoogle /> signIn with google
      </button>
    </div>
  );
};

export default LoginButton;
