import React, { useState } from "react";

import "./List.css";

export default function BudgetList({ budgets, onAddSpend }) {
  return (
    <section className="budgetList">
      <div className="budgetCard">
        <div> 
          <div className="row">
            <div>Name / Category</div>
            <div>Amount</div>
          </div>
          <div className="row">
            <div>Current Spend</div>
            <div>Over budget (if applicable)</div>
          </div>
          <button className="addSpendButton" disabled>
            Add spend
          </button>
        </div>
      </div>

      {budgets.map((b, idx) => {
        const over = b.currentSpend > b.amount;

        const handleClick = () => {
            const input = prompt('How much are you adding to the current budget?');
            if (input === null) return;
            const num = parseFloat(input);
            if (isNaN(num) || num <= 0) {
              alert('Please enter a valid positive number.');
              return;
            }
            onAddSpend(idx, num);
          };

        
        return (
          <div className="budgetCard" key={idx}>
            <div className="row">
              <div>{b.name} / {b.category}</div>
              <div>${Number(b.amount).toFixed(2)}</div>
            </div>
            <div className="row">
              <div>${Number(b.currentSpend).toFixed(2)}</div>
              <div>
                {over ? "You are over budget :(" : "Under the budget :)"}
              </div>
            </div>
            <button className="addSpendButton" onClick={handleClick}>Add spend</button>
          </div>
        );
      })}
    </section>
  );
}
