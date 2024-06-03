/* eslint-disable react/prop-types */
import { useState } from "react";
import arrowleft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import styles from "./Pagination.module.css";

const Pagination = ({ currentPageFn, transactionData }) => {
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const handelChangePageNum = (text) => {
    const max = Math.ceil(transactionData.length / 3) || 1;

    setCurrentPageNum((prevPageNum) => {
      if (text == "back" && prevPageNum === 1) return 1;
      else if (text == "next" && prevPageNum === max) return prevPageNum;

      let newPageNum;
      if (text == "back") {
        newPageNum = prevPageNum - 1;
      } else {
        newPageNum = prevPageNum + 1;
      }
      // console.log(newPageNum);
      currentPageFn(newPageNum);
      return newPageNum;
    });
  };

  // useEffect(() => {
  //   currentPageFn(currentPageNum);
  // }, [currentPageNum]);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.backBtn}
        onClick={() => handelChangePageNum("back")}
      >
        <img src={arrowleft} alt="back" />
      </button>
      <div className={styles.CurrentPage}>{currentPageNum}</div>
      <button
        className={styles.nextBtn}
        onClick={() => handelChangePageNum("next")}
      >
        <img src={arrowRight} alt="next" />
      </button>
    </div>
  );
};

export default Pagination;
