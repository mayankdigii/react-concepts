import React from "react";

// The child component receives 'user' via props
function UserProfile(props) {
  const { name, age, location } = props.user;
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserProfile;
