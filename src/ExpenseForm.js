import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date()); // Today's date by default
  const [category, setCategory] = useState('Groceries'); // Default category
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      amount,
      date,
      category,
      notes,
    };

    addExpense(newExpense); // Call the prop function to add expense

    // Reset form after submission (optional)
    setAmount(0);
    setDate(new Date());
    setCategory('Groceries');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date.toISOString().split('T')[0]} onChange={(e) => setDate(new Date(e.target.value))} />

      <label htmlFor="category">Category:</label>
      <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Groceries">Groceries</option>
        <option value="Transportation">Transportation</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Other">Other</option>
        {/* Add more category options as needed */}
      </select>

      <label htmlFor="notes">Notes:</label>
      <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} />

      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
