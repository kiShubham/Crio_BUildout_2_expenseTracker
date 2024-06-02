import arrowleft from "../../assets/arrowLeft.svg";
import arrowRight from "../../assets/arrowRight.svg";
import styles from "./Pagination.module.css";
const Pagination = () => {
  const handleClick = () => {
    console.log("object");
  };
  return (
    <div className={styles.pagination}>
      <div className={styles.backBtn}>
        <img src={arrowleft} alt="back" />
      </div>
      <div onClick={handleClick} className={styles.CurrentPage}>
        1
      </div>
      <div className={styles.nextBtn}>
        <img src={arrowRight} alt="back" />
      </div>
    </div>
  );
};

export default Pagination;
