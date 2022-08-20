import React from "react";
import bannerImg from "../assets/images/banner.png";

import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h2>Fitness Club</h2>
            <h3>
              Sweat, Smile <br />
              And Repeat
            </h3>
            <p>Check out the most effective exercises personalized to you</p>
            <button
              onClick={() => {
                navigate("/exercises");
              }}
            >
              Explore Exercises
            </button>
          </div>
          <img className={styles.heroImg} src={bannerImg} alt="banner" />
        </section>
      </main>
    </>
  );
};

export default Home;
