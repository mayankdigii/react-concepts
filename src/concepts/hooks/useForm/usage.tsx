import React from "react";
import useForm from "./index";

// Validation function for the form fields
const validate = (values) => {
  const errors: {name: string, email: string} = {
      name: "",
      email: ""
  };
  if (!values.name) errors.name = "Name is required";
  if (!values.email) errors.email = "Email is required";
  return errors;
};

function Form() {
  const { values, errors, handleChange, handleSubmit } = useForm(
    { name: "", email: "" },
    validate
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
