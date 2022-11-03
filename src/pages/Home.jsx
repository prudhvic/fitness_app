import React, { useState } from "react";
import bannerImg from "../assets/images/banner.png";

import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
const Home = () => {
  let navigate = useNavigate();
  let [show, setShow] = useState(false);
  let { user } = useAuth0();
  let NavigateToExercises = () => {
    console.log(user);
    if (!user) {
      setShow(true);
    } else {
      navigate("/exercises");
    }
  };
  return (
    <>
      {show && (
        <div className="overlay">
          <div>
            <h3>Please signIn to see exercises</h3>
            <button onClick={() => setShow(false)}>Ok</button>
          </div>
        </div>
      )}
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2>Fitness Club</h2>
            <h3>
              Sweat, Smile <br />
              And Repeat
            </h3>
            <p>Check out the most effective exercises personalized to you</p>
            <button onClick={NavigateToExercises}>Explore Exercises</button>
          </div>
          <img className={styles.heroImg} src={bannerImg} alt="banner" />
        </section>
      </main>
    </>
  );
};

export default Home;
