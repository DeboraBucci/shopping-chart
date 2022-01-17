import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const expensesArr = [];
  expenses.map(({ title, id, amount, date }) => {
    expensesArr.push(
      <ExpenseItem title={title} key={id} amount={amount} date={date} />
    );
  });
  return <Card className="expenses">{expensesArr}</Card>;
};

export default Expenses;
