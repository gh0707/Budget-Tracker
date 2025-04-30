import React, { useState } from 'react';
import './Gallery.css';
import { useLocation } from 'react-router-dom';

import Form from './Landing-page-components/Form.jsx';
import List from './Landing-page-components/List.jsx';
import Delete from './Landing-page-components/Delete.jsx';

export default function Gallery() {
  const { state } = useLocation();
  const name = state?.name ?? 'Guest';

  const [budgets, setBudgets] = useState([]);

  const handleAddBudget = ({ budgetName, amount, category }) => {
    setBudgets(prev => [
      ...prev,
      {
        name: budgetName,
        amount: Number(amount),
        category,
        currentSpend: 0.00,
      }
    ]);
  };

  const handleAddSpend = (index, addMoney) => {
    setBudgets(prev =>
      prev.map((b, i) =>
        i === index
          ? { ...b, currentSpend: b.currentSpend + addMoney }
          : b
      )
    );
  };


  return (
    <div className="Gallery">
      <h1>
        Hello, <span style={{ color: '#3ab0e6' }}>{name}</span>
      </h1>

      <Form onAdd={handleAddBudget} />

      <h2 className="existingBudgets">
        <span>Existing </span>
        <span className="bolderBudgets">Budgets</span>
      </h2>

      <List budgets={budgets} onAddSpend={handleAddSpend}/>

      <Delete onYesDelete={() => setBudgets([])}/>
    </div>
  );
}
