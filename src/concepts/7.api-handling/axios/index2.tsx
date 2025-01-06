import React, { useState } from "react";
import axios from "axios";

function SubmitForm() {
  const [name, setName] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { name };

    try {
      const response = await axios.post(
        "https://api.example.com/submit",
        userData
      );
      setResponseMessage(response.data.message); // Assuming the API returns a 'message' field
    } catch (error) {
      console.error("Error submitting data:", error);
      setResponseMessage("Failed to submit data");
    }
  };

  return (
    <div>
      <h1>Submit Your Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
}

export default SubmitForm;
