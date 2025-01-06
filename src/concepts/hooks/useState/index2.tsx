// useState - Example 2

import React, { useState } from "react";

function Form() {
  // Declare a state variable 'name' with an initial empty string
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Update the state with the input value
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`); // Show an alert with the entered name
  };

  return (
    <div>
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name} // Bind input value to 'name' state
          onChange={handleChange} // Update the state on input change
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
