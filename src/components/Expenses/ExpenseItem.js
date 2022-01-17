import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

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

  console.log(title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        {change === false ? (
          <h2>{title}</h2>
        ) : (
          <div>
            <input placeholder="write here..."></input>
            <button onClick={inputHandler}>Ok</button>
          </div>
        )}
        <div className="expense-item__price">{`$ ${amount}`}</div>
      </div>
      <button onClick={changeHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
