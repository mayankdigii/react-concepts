import React from "react";
import UserProfile from "./UserProfile";

function App() {
  const user = {
    name: "Jane Doe",
    age: 30,
    location: "New York",
  };

  return (
    <div>
      <UserProfile user={user} />
    </div>
  );
}

export default App;
