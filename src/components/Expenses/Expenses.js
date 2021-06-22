import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const setExpenseYearHandler = (expenseFilter) => {
    setEnteredYear(expenseFilter);
  };

  const filteredExpense = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === enteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          setYearHandler={setExpenseYearHandler}
        />
        <ExpensesList items={filteredExpense}/>
      </Card>
    </div>
  );
};
export default Expenses;
