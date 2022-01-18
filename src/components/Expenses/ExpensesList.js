import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map(({ id, title, amount, date }) => {
        return (
          <li key={id}>
            <ExpenseItem title={title} amount={amount} date={date} />
          </li>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
