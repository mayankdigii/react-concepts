import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value); // Update state on input change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={name} // Controlled value, bound to state
        onChange={handleChange} // Updates state on each input change
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
