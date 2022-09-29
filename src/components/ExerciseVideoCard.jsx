import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import styles from "./ExerciseVideos.module.css";
const ExerciseVideoCard = ({ item }) => {
  return (
    <a
      className={styles.video_card}
      href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
      target="_blank"
      rel="noreferrer"
    >
      <img
        style={{ borderTopLeftRadius: "20px" }}
        src={item.video.thumbnails[0].url}
        alt={item.video.title}
      />

      <div>
        <p fontWeight={600} color="#000">
          {item.video.title}
        </p>
        <h3>{item.video.channelName}</h3>
        <div className={styles.icon}>
          <BsFillPlayCircleFill />
        </div>
      </div>
    </a>
  );
};

export default ExerciseVideoCard;
