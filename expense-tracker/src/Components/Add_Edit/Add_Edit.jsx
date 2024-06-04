/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./Add_Edit.module.css";

const Add_Edit = ({
  attr = "expense",
  editOrAdd = "Add",
  cancelfn,
  handleNewTransactions,
  handleBalance,
  existingData,
  currentBalance,
}) => {
  const [newExpense, setNewExpense] = useState(() => {
    if (existingData) {
      return {
        title: existingData.title,
        price: existingData.price,
        category: existingData.category,
        date: existingData.date,
      };
    } else
      return {
        title: "",
        price: "",
        category: "",
        date: "",
      };
  });

  const [addBalance, setAddBalance] = useState("");

  const handleNewExpense = () => {
    handleNewTransactions(newExpense, existingData ? existingData.title : null);
    // cleanup
    setNewExpense({ title: "", price: "", category: "", date: "" });
    handleCancel();
  };
  const handleAddBalance = () => {
    handleBalance(addBalance);
    //cleanup
    setAddBalance("");
    handleCancel();
  };

  const handleCancel = () => {
    cancelfn(false);
  };
  const handleOverPrice = (e) => {
    const price = e.target.value;
    if (price > currentBalance) {
      window.alert("add more money to have this, overPrice");
    } else if (price < 0) {
      window.alert(
        "son nothing is free in this world \n Please enter valid price ,"
      );
    } else setNewExpense((prev) => ({ ...prev, price: price }));
  };

  return (
    <div>
      {attr == "expense" ? (
        <div className={styles.expenses_Section}>
          <div className={styles.heading}>{editOrAdd} Expenses</div>
          <div className={styles.fields}>
            <input
              type="text"
              placeholder="Title"
              className={styles.child}
              value={newExpense.title}
              onChange={(e) =>
                setNewExpense((prev) => ({ ...prev, title: e.target.value }))
              }
              required
            />
            <input
              type="number"
              placeholder="Price"
              className={styles.child}
              value={newExpense.price}
              onChange={(e) => handleOverPrice(e)}
              required
            />
            <select
              name="pets"
              id="pet-select"
              className={styles.child}
              required
              value={newExpense.category}
              onChange={(e) =>
                setNewExpense((prev) => ({ ...prev, category: e.target.value }))
              }
            >
              <option value="">Select category</option>
              {/*default entertaiment selected */}
              <option value="entertaiment">Entertaiment</option>
              <option value="food">Food</option>
              <option value="travel">Travel</option>
            </select>
            <input
              type="date"
              className={styles.child}
              value={newExpense.date}
              onChange={(e) =>
                setNewExpense((prev) => ({ ...prev, date: e.target.value }))
              }
              required
            />
          </div>
          <div className={styles.actionBtns}>
            <button onClick={handleNewExpense}>Add Expense</button>
            <button onClick={handleCancel}>cancel</button>
          </div>
        </div>
      ) : (
        <div className={styles.expenses_Section}>
          <div className={styles.heading}>Add Balance</div>
          <div className={styles.balanceFields}>
            <input
              type="number"
              placeholder="Income Amount"
              className={styles.priceInput}
              onChange={(e) => setAddBalance(Math.abs(e.target.value))}
            />
            <div className={styles.actionBtns}>
              <button
                className={styles.addBalanceBtn}
                onClick={handleAddBalance}
              >
                Add Balance
              </button>
              <button className={styles.cancelBtn} onClick={handleCancel}>
                cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Add_Edit;
