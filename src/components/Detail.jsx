import React from "react";
import styles from "./Detail.module.css";
import BodyPartImg from "../assets/icons/body-part.png";
import equipmentImg from "../assets/icons/equipment.png";
import targetImg from "../assets/icons/target.png";
import BackBtn from "../utils/BackBtn";

const Detail = ({ exercise }) => {
  let details = [
    {
      name: exercise.bodyPart,
      img: BodyPartImg,
    },
    {
      name: exercise.equipment,
      img: equipmentImg,
    },
    {
      name: exercise.target,
      img: targetImg,
    },
  ];
  return (
    <div className={styles.details}>
      <BackBtn className="detail-back-btn" />
      <div className={styles.info}>
        <img src={exercise.gifUrl} alt={exercise.name} />
      </div>
      <div className={styles.detail}>
        <h2>{exercise.name}</h2>
        <p>
          Exercises keep you strong. <span>{exercise.name}</span> bup is one of
          the best <br /> exercises to target your {exercise.target}. It will
          help you improve your mood and gain energy.
        </p>
        <div className={styles.tags}>
          {details.map((detail) => (
            <div key={detail.name}>
              <button>{detail.name}</button>
              <img src={detail.img} alt={detail.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
