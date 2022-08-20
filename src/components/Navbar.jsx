import React from "react";
import { Link } from "react-router-dom";
import exerciseLogo from "../assets/images/Logo.png";
import styles from "./Navbar.module.css";
import { FaHome } from "react-icons/fa";
import { MdFitnessCenter } from "react-icons/md";
const Navbar = () => {
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
          <li>
            <MdFitnessCenter />
            <Link to="/exercises">Exercises</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
