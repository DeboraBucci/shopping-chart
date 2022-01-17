import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
import ExpensesInput from "./ExpensesInput";

const ExpenseItem = ({ title: initialTitle, amount, date }) => {
  const [title, setTitle] = useState(initialTitle);
  const [change, setChange] = useState(false);

  const changeHandler = () => {
    setChange(true);
  };

  const inputHandler = (e) => {
    const input = document.querySelector("input");
    if (input.value.trim().length === 0) {
      setChange(false);
      return;
    }

    setTitle(input.value);
    setChange(false);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        {change === false ? (
          <h2>{title}</h2>
        ) : (
          <ExpensesInput inputHandler={inputHandler} title={title} />
        )}
        <div className="expense-item__price">{`$ ${amount}`}</div>
      </div>
      <button onClick={changeHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
