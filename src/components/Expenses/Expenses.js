import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"

const Expenses = (props) => {
  
  const [ enteredYear, setEnteredYear ] = useState('2020');

  const setExpenseYearHandler = (expenseFilter) => {
    setEnteredYear(expenseFilter);
  };

    return (
      <div>
        <ExpensesFilter selected={ enteredYear } setYearHandler={setExpenseYearHandler} />
        <Card className="expenses">
          <ExpenseItem
            title={props.expenses[0].title}
            amount={props.expenses[0].amount}
            date={props.expenses[0].date}
          />
          <ExpenseItem
            title={props.expenses[1].title}
            amount={props.expenses[1].amount}
            date={props.expenses[1].date}
          />
          <ExpenseItem
            title={props.expenses[2].title}
            amount={props.expenses[2].amount}
            date={props.expenses[2].date}
          />
        </Card>
      </div>
    );
}
export default Expenses;