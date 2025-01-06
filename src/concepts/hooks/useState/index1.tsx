// useState - Example 1

import React, { useState } from "react";

function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        height: "100vh",
        transition: "background-color 0.3s",
      }}
    >
      <h1>{theme.charAt(0).toUpperCase() + theme.slice(1)} Mode</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default DarkModeToggle;
