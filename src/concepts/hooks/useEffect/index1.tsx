import React, { useState, useEffect } from "react";

function TitleUpdater() {
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Hello, ${name || "Guest"}`;
  }, [name]);

  return (
    <div>
      <h1>Update Document Title</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}

export default TitleUpdater;
