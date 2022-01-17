import React from "react";
import "./ExpensesInput.css";

const ExpensesInput = ({ inputHandler, title }) => {
  return (
    <div className="input-container">
      <div className="input-box">
        <input className="input" placeholder={title}></input>
        <button className="input-btn" onClick={inputHandler}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default ExpensesInput;
