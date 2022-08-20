import React, { useEffect, useState } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useExerciseContext } from "../context/ExerciseContext";
import styles from "./Paginate.module.css";
const Paginate = () => {
  let [currentTab, setCurrentTab] = useState(1);

  let { exercises, exercisesPerPage, setCurrentPage, currentPage } =
    useExerciseContext();
  let pageNums = [];
  for (let i = 0; i < Math.floor(exercises.length / exercisesPerPage); i++) {
    pageNums.push(i + 1);
  }
  let btnLength = pageNums.length;
  console.log(btnLength);
  let tablength = Math.round(pageNums.length / 10);
  pageNums = [...pageNums.slice((currentTab - 1) * 10, 10 * currentTab)];
  let prevTab = () => {
    setCurrentTab((prev) => (prev <= 1 ? tablength + 1 : prev - 1));
    console.log(currentTab);
    if (currentTab > tablength) {
      setCurrentPage((currentTab - 1) * 10 + 1);
      return;
    }
    setCurrentPage((currentTab - 1) * 10 - 10 + 1);
  };
  let isFirst = true;
  let nextTab = () => {
    setCurrentTab((prev) => (prev > tablength ? 1 : prev + 1));
    if (currentTab > tablength) {
      setCurrentPage(1);
      return;
    }
    setCurrentPage(currentTab * 10 + 1);
  };
  return (
    <div className={styles.pagination}>
      <button className={styles.nextBtn} onClick={prevTab}>
        <GrLinkPrevious />
      </button>
      <div className={styles.nums}>
        {pageNums.map((pageNum) => (
          <button
            className={pageNum === currentPage ? styles.active : ""}
            onClick={() => {
              setCurrentPage(pageNum);
              window.scrollTo(0, 1600);
            }}
          >
            {pageNum}
          </button>
        ))}
      </div>

      <button className={styles.prevBtn} onClick={nextTab}>
        <GrLinkNext />
      </button>
    </div>
  );
};

export default Paginate;
