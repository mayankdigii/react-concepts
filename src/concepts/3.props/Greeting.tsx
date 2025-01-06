import React from "react";

// The child component receives 'name' via props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

export default Greeting;
