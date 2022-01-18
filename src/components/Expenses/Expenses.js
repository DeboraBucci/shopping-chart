import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expensesPush = (title, id, amount, date) => {
    expensesArr.push(
      <ExpenseItem title={title} key={id} amount={amount} date={date} />
    );
  };

  const expensesArr = [];
  expenses.map(({ title, id, amount, date }) => {
    if (filteredYear === "show-all") {
      expensesPush(title, id, amount, date);
    }

    if (date.getFullYear() === Number(filteredYear)) {
      expensesPush(title, id, amount, date);
    }
  });
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesArr}
    </Card>
  );
};

export default Expenses;
