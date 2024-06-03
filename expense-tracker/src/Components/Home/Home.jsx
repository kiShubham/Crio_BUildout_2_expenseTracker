/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import PieChart from "../PieChart/PieChart";
import Add_Edit from "../Add_Edit/Add_Edit";
import Items from "../Items/Items";
import Pagination from "../Pagination/Pagination";

const Home = () => {
  const [edit, setEdit] = useState(false);
  const [att, setAtt] = useState("expense");
  const [transactions, setTransactions] = useState(() => {
    if (localStorage.getItem("transaction")) {
      let arr = JSON.parse(localStorage.getItem("transaction"));
      return arr;
    }
    return [];
  });
  // const [transactions, setTransactions] = useState([
  //   // { title: "hh", price: "1000", category: "food", date: "10-10-1997" },
  // ]);
  const [Indexes, setIndexes] = useState({
    first: 0,
    last: 3,
  });

  const [existingDataObj, setExistingDataObj] = useState({});
  const [balance_expenses, setBalanceExpense] = useState({
    balance: 5000,
    expense: 0,
    orgBalance: 5000,
  });

  const handleAddBalance = (addBalance) => {
    if (addBalance) {
      setBalanceExpense((prev) => ({
        ...prev,
        orgBalance: prev.balance + parseInt(addBalance),
        balance: prev.balance + parseInt(addBalance),
      }));
    }

    return;
  };

  const handleBalance_expenses = () => {
    let total_expense = 0;
    if (transactions.length) {
      transactions.forEach((e) => {
        total_expense += parseInt(e.price);
      });
    }

    const balance = balance_expenses.orgBalance - total_expense;
    // console.log(balance);
    // const newBalance = balance_expenses.balance - total_expense;
    // console.log(newBalance);

    setBalanceExpense((prev) => ({
      ...prev,
      // balance: prev.balance - total_expense,
      balance: balance,
      expense: total_expense,
    }));
    return;
  };

  const handleNewTransactions = (newTransactionObj, oldtitle) => {
    const { title, price, date, category } = newTransactionObj;
    if (!title || !price || !date || !category) return;

    if (oldtitle) {
      setTransactions((prev) =>
        //Replace the transaction where title matches oldtitle
        prev.map((transaction) =>
          transaction.title === oldtitle ? newTransactionObj : transaction
        )
      );
    } else {
      setTransactions((prev) => [...prev, newTransactionObj]);
    }
  };

  const handleEdit = (text, existingData) => {
    text === "income"
      ? setAtt((e) => (e = "income"))
      : text === "edit_Expense"
      ? setAtt("edit_Expense")
      : setAtt("expense");
    if (existingData) {
      setExistingDataObj(existingData);
    }
    setEdit(true);
  };

  const cancelAtt = (bool) => {
    !bool == true ? setEdit(false) : null;
  };
  const removetransaction = (title) => {
    //search in transactions and remove it from array ,add the money to total balance and remove the expense
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.title !== title)
    );
  };

  //working but not rendering properly
  const handelcurrentPage = (data) => {
    // data = current pageNum
    // console.log(data);
    const itemPerPage = 3;
    const indexOfLastItem = itemPerPage * data; //3
    const indexOfFirstItem = indexOfLastItem - itemPerPage; //0
    // console.log(indexOfFirstItem, indexOfLastItem);
    setIndexes({ first: indexOfFirstItem, last: indexOfLastItem });
  };

  useEffect(() => {
    handleBalance_expenses();
    if (transactions.length)
      localStorage.setItem("transaction", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <div>
      <div className={styles.home}>
        <div className={styles.heading}>Expense Tracker</div>
        <div className={styles.top}>
          <div className={styles.box}>
            <div>
              <span>Wallet Balance:</span>
              <span style={{ fontWeight: "700" }}>
                ₹{balance_expenses.balance}
              </span>
            </div>
            <button onClick={() => handleEdit("income")}>Add Income</button>
          </div>
          <div className={styles.box}>
            <div>
              <span>Expenses:</span>
              <span style={{ fontWeight: "700" }}>
                ₹{balance_expenses.expense}
              </span>
            </div>
            <button
              onClick={() => handleEdit("expense")}
              className={styles.expenseBtn}
            >
              +Add Expense
            </button>
          </div>
          <div className={styles.graph}>
            <PieChart graphData={transactions} />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.transactions}>
            <div className={styles.headings_1}>Recent Transactions</div>
            <div className={styles.transactionsDetails}>
              {transactions
                .slice(Indexes.first, Indexes.last)
                .map((transaction, index) => {
                  return (
                    <Items
                      data={transaction}
                      key={index}
                      handleEditfn={handleEdit}
                      removeFn={removetransaction}
                    />
                  );
                })}
              <div className={styles.pagination}>
                <Pagination
                  currentPageFn={handelcurrentPage}
                  transactionData={transactions}
                />
              </div>
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
          {att === "expense" ? (
            <Add_Edit
              cancelfn={cancelAtt}
              attr={"expense"}
              editOrAdd={"Add"}
              handleNewTransactions={handleNewTransactions}
            />
          ) : att == "edit_Expense" ? (
            <Add_Edit
              cancelfn={cancelAtt}
              attr={"expense"}
              editOrAdd={"Edit"}
              handleNewTransactions={handleNewTransactions}
              existingData={existingDataObj}
            />
          ) : (
            <Add_Edit
              cancelfn={cancelAtt}
              attr={"income"}
              editOrAdd={"Add"}
              handleBalance={handleAddBalance}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Home;

/**
 *
 * ? The map function is used to iterate over each item in the transactions array and
 * create a new array where each item is transformed according to a specified logic.
 * In our case, the logic is to replace a transaction with the same title as oldtitle
 * with newTransactionObj. If the title does not match oldtitle, the original transaction is kept unchanged.
 */
