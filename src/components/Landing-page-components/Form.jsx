import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function Form({ onAdd }) {
  const [budgetName, setBudgetName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");


  const handleBudgetNameChange = (e) => setBudgetName(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("budgetName:", budgetName);
    console.log("amount:", amount);
    console.log("category:", category);
    alert("The budget list has been updated !");
    onAdd({ budgetName, amount, category });
    setBudgetName('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="Form">
      <form className="budgetForm" onSubmit={handleSubmit}>
        <div className="formControls">
          <div className="formCard">
            <h3 className="formTitle">
              Create
              <span> </span>
              <span style={{ color: "#3ab0e6" }}>Budget</span>
            </h3>
            <div className="budgetNameCard">
              <label htmlFor="budgetName" className="budgetNameLabel">
                Budget Name
              </label>
              <input
                type="text"
                id="budgetName"
                name="budgetName"
                placeholder="Enter a name"
                required
                value={budgetName}
                onChange={handleBudgetNameChange}
                className="budgetNameInput"
              />
            </div>
            <div className="amountCard">
              <label htmlFor="amount" className="amountLabel">
                Amount
              </label>
              <input
                type="number"
                min={0.01}
                step={0.01}
                max={99999.99}
                id="amount"
                name="amount"
                placeholder="Enter a number"
                required
                value={amount}
                onChange={handleAmountChange}
                className="amountInput"
              />
            </div>
            <div className="categoryCard">
              <label htmlFor="category" className="categoryLabel">
                Category
              </label>
              <select
                id="category"
                name="category"
                required
                Value={category}
                onChange={handleCategoryChange}
                className="categoryInput"
              >
                <option value="" readonly>
                  Select One
                </option>
                <option value="Utilities">Utilities</option>
                <option value="Insurance">Insurance</option>
                <option value="Debt">Debt</option>
                <option value="Groceries">Groceries</option>
                <option value="Transportation">Transportation</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Health care">Health care</option>
                <option value="Clothing">Clothing</option>
                <option value="Personal care">Personal care</option>
              </select>
            </div>

            <button className="submitButton" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
