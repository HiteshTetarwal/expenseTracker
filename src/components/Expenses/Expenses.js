import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const setExpenseYearHandler = (expenseFilter) => {
    setEnteredYear(expenseFilter);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          setYearHandler={setExpenseYearHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
