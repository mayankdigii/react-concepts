import React, { useRef } from "react";

function UncontrolledForm() {
  const nameInput = useRef() as any; // Create a ref to access the DOM input element

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted Name: ${nameInput?.current?.value}`); // Access input value using ref
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        ref={nameInput} // Reference to the input element
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
