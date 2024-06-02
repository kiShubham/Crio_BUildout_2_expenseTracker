/* eslint-disable react/prop-types */
import styles from "./Add_Edit.module.css";

const Add_Edit = ({ attr = "expense", editOrAdd = "Add" }) => {
  return (
    <div>
      {attr == "expens" ? (
        <div className={styles.expenses_Section}>
          <div className={styles.heading}>{editOrAdd} Expenses</div>
          <div className={styles.fields}>
            <input type="text" placeholder="Title" className={styles.child} />
            <input type="number" placeholder="Price" className={styles.child} />
            <select name="pets" id="pet-select" className={styles.child}>
              <option value="">Select category</option>
              <option value="entertaiment">Entertaiment</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
            </select>
            <input type="date" className={styles.child} />
          </div>
          <div className={styles.actionBtns}>
            <button>Add Expense</button>
            <button>cancel</button>
          </div>
        </div>
      ) : (
        <div className={styles.expenses_Section}>
          <div className={styles.heading}>Add Balance</div>
          <div className={styles.balanceFields}>
            <input
              type="number"
              placeholder="Price"
              className={styles.priceInput}
            />
            <div className={styles.actionBtns}>
              <button className={styles.addBalanceBtn}>Add Balance</button>
              <button className={styles.cancelBtn}>cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Add_Edit;
