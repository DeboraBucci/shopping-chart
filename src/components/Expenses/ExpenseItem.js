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
          <div className="expense-title__container">
            <h2>{title}</h2>
            <button className="expense-title__btn" onClick={changeHandler}>
              <i class="fas fa-edit"></i>
            </button>
          </div>
        ) : (
          <ExpensesInput inputHandler={inputHandler} title={title} />
        )}
        <div className="expense-item__price">{`$ ${amount}`}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
