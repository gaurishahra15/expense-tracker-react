import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]); // Add new expense to the list
  };

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseForm addExpense={addExpense} /> {/* Pass addExpense function */}
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}> {/* Add unique key for each expense */}
            Amount: ${expense.amount}, Date: {expense.date.toLocaleDateString()}, Category: {expense.category}, Notes: {expense.notes}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
