import React from "react";
import { Link } from "react-router-dom";
import exerciseLogo from "../assets/images/Logo.png";
import styles from "./Navbar.module.css";
import { FaHome, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  let signout = () => {
    logout({ returnTo: window.location.origin });
  };
  return (
    <header className={styles.header}>
      <h1>
        <img src={exerciseLogo} alt="fitness app" />
        <Link to="/"></Link>
      </h1>
      <nav>
        <ul>
          <li>
            <FaHome />
            <Link to="/">Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <MdFitnessCenter />
                <Link to="/exercises">Exercises</Link>
              </li>
              <li>
                <FaSignOutAlt />
                <button className={styles.logoutBtn} onClick={signout}>
                  logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <FaSignInAlt />
              <button onClick={() => loginWithRedirect()}>signup</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
