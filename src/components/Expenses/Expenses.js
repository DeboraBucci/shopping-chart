import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("show-all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(({ date }) => {
    return date.getFullYear().toString() === filteredYear;
  });

  const finalExpenses =
    filteredYear === "show-all" ? expenses : filteredExpenses;

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={finalExpenses} />
      <ExpensesList expenses={finalExpenses} />
    </Card>
  );
};

export default Expenses;
