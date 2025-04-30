import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Name.css';


export default function Name() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = e => setName(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
    alert(`Your name is: ${name}`);
    navigate ('/Main', {state: {name}})
  };

  return (
    <div className="nameContainer">
      <h1 className="nameTitle">
        Hello, May I please have your name?
      </h1>

      <form className="nameForm" onSubmit={handleSubmit}>
        <div className="nameControls">
          <div className="inputCard">
            <input
              type="text"
              id="nameInput"
              name="nameInput"
              placeholder="Enter a name"
              required
              value={name}
              onChange={handleNameChange}
              className="textInput"
            />
            <button className="submitButton" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}