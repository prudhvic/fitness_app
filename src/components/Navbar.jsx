import React from "react";
import { Link } from "react-router-dom";
import exerciseLogo from "../assets/images/Logo.png";
import styles from "./Navbar.module.css";
import { FaHome, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";
import { useAuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
const Navbar = () => {
  let { user, loading } = useAuthContext();
  let signout = () => {
    signOut(auth);
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
              <Link to="/auth/signin">signup</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
