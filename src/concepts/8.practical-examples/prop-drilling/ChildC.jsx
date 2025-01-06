import React from "react";

function ChildC({ name }) {
  return (
    <div>
      <h2>ChildC Component</h2>
      <p>Name received from Parent: {name}</p> {/* Data received from Parent */}
    </div>
  );
}

export default ChildC;
