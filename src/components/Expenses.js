import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const expensesArr = [];
  expenses.map(({ title, id, amount, date }) => {
    expensesArr.push(
      <ExpenseItem title={title} key={id} amount={amount} date={date} />
    );
  });

  console.log(expensesArr);

  return <div>{expensesArr}</div>;
};

export default Expenses;
