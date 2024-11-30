import React, { useState } from "react";
import { Cards } from "./components/Cards";
import "./index.css";

function App() {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const cardStyle = {
    width: '300px',
    padding: '20px',
    marginBottom: '20px'
  };

  const showIncomeModal = () => {
    // TODO: Implement income modal
    const amount = parseFloat(prompt("Enter income amount:"));
    if (!isNaN(amount)) {
      setIncome(prev => prev + amount);
      setCurrentBalance(prev => prev + amount);
    }
  };

  const showExpenseModal = () => {
    // TODO: Implement expense modal
    const amount = parseFloat(prompt("Enter expense amount:"));
    if (!isNaN(amount)) {
      setExpenses(prev => prev + amount);
      setCurrentBalance(prev => prev - amount);
    }
  };

  const reset = () => {
    setCurrentBalance(0);
    setIncome(0);
    setExpenses(0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Personal Finance Tracker</h1>
      <Cards
        currentBalance={currentBalance}
        income={income}
        expenses={expenses}
        showExpenseModal={showExpenseModal}
        showIncomeModal={showIncomeModal}
        cardStyle={cardStyle}
        reset={reset}
      />
    </div>
  );
}

export default App; 