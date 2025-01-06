/* eslint-disable react/prop-types */
import React from "react";

// Concept 1 : JSX Basic 

// HTML-like Syntax in JavaScript
const element = <h1>Hello, world!</h1>;
console.log(element);

// Expression Embedding
const userName = "John";
const element2 = <h1>Hello, {userName}!</h1>;
console.log('element', element2);


// Concept 2 - JSX gets transformed into the Javascript since web only understands html, css, javascript

// JSX
const element3 = <h1>Hello, world!</h1>;
console.log(element3);

// After conversion to js
const element3InJS = React.createElement("h1", null, "Hello, world!");
console.log(element3InJS);


// Concept 3 - JSX Usage in React Components
function Welcome(props) {
  return <h1>Hello, {props?.userName}!</h1>;
}

const element5 = <Welcome userName="Sara" />;
console.log(element5);

// Concept 4 - JSX is Optional

function Welcome2(props) {
  return React.createElement("h1", null, "Hello, " + props.name + "!");
}

const element6 = <Welcome2 userName="Sara" />;
console.log(element6);