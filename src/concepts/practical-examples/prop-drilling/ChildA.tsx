import React from "react";
import ChildB from "./ChildB";

function ChildA({ name }) {
  return (
    <div>
      <h2>ChildA Component</h2>
      <ChildB name={name} /> {/* Prop drilling to ChildB */}
    </div>
  );
}

export default ChildA;
