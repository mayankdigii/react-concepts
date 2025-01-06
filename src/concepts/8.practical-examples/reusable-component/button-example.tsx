import React, { useState } from "react";
import Button from "./button";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      {/* Reusing the Button component with different props */}
      <Button
        text="Increment"
        onClick={handleIncrement}
        style={{ backgroundColor: "green", color: "white", padding: "10px" }}
      />

      <Button
        text="Reset"
        onClick={handleReset}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          marginLeft: "10px",
        }}
      />
    </div>
  );
}

export default App;
