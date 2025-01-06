import React from "react";
import ChildA from "./ChildA";

function App() {
  const name = "John Doe"; // This data will be passed down

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildA name={name} />
    </div>
  );
}

export default App;
