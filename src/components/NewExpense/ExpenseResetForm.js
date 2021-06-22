import React from 'react';
import './ExpenseForm.css'

const ExpenseResetForm = () => {
    return (
      <form onSubmit={expenseForm}>
        <div className="new-expense__control">
          <button type="submit">Add new expense</button>
        </div>
      </form>
    );
}

export default ExpenseResetForm;