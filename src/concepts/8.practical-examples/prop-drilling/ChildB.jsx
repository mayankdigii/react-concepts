import React from "react";
import ChildC from "./ChildC";

function ChildB({ name }) {
  return (
    <div>
      <h2>ChildB Component</h2>
      <ChildC name={name} /> {/* Prop drilling to ChildC */}
    </div>
  );
}

export default ChildB;
