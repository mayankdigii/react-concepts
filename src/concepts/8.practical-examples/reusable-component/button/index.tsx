import React from "react";

// Button component accepts props for text, onClick function, and style customization
function Button({ text, onClick, style }) {
  return (
    <button onClick={onClick} style={style}>
      {text}
    </button>
  );
}

export default Button;
