/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import styles from "./Home.module.css";
import PieChart from "../PieChart/PieChart";
import Add_Edit from "../Add_Edit/Add_Edit";
import Items from "../Items/Items";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(true);
  };
  return (
    <div>
      <div className={styles.home}>
        <div className={styles.heading}>Expense Tracker</div>
        <div className={styles.top}>
          <div className={styles.box}>
            <div>
              <span>Wallet Balance:</span>
              <span style={{ fontWeight: "700" }}> ₹5000</span>
            </div>
            <button onClick={handleEdit}>+Add Income</button>
          </div>
          <div className={styles.box}>
            <div>
              <span>Expenses:</span>
              <span style={{ fontWeight: "700" }}> ₹0</span>
            </div>
            <button onClick={handleEdit} className={styles.expenseBtn}>
              +Add Expense
            </button>
          </div>
          <div className={styles.graph}>
            <PieChart dataa="" />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.transactions}>
            <div className={styles.headings_1}>Recent Transactions</div>
            <div className={styles.transactionsDetails}>
              <Items />
              <Items />
              <Items />
              <Pagination />
            </div>
          </div>
          <div className={styles.top_expenses}>
            <div className={styles.headings_1}>Top Expenses</div>
            <div className={styles.horizontalGraph}>
              <div className={styles.YaxisNames}>
                <div className={styles.name}>Entertaiment</div>
                <div className={styles.name}>Food</div>
                <div className={styles.name}>Book</div>
              </div>
              <div className={styles.bars}>
                <div className="entertaiment" style={{ width: "80px" }}></div>
                <div className="food" style={{ width: "120px" }}></div>
                <div className="book" style={{ width: "200px" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {edit == true ? (
        <div className={styles.addMoney}>
          <Add_Edit />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
