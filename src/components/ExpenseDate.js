import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-Us", { month: "long" });
  const day = date.toLocaleString("en-Us", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenseDate;
