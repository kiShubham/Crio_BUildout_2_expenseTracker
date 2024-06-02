import styles from "./Items.module.css";
import pencil from "../../assets/pencil.svg";
import cross from "../../assets/cross.svg";

const Items = () => {
  return (
    <div className={styles.Item}>
      <div className={styles.details}>
        <div className={styles.nameDate}>
          <div className={styles.name}>Name</div>
          <div className={styles.date}>Jan 31st 2015</div>
        </div>
        <div className={styles.actions}>
          <div className={styles.cost}>₹150</div>
          <button className={styles.cancelBtn}>
            <img src={cross} alt="comments" className={styles.pencil} />
          </button>
          <button className={styles.pencilBtn}>
            <img src={pencil} alt="comments" className={styles.pencil} />
          </button>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Items;
