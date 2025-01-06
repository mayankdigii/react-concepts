import { useContext } from "react";
import AuthContext from "./AuthContext";

const AuthStatus = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      <p>{isAuthenticated ? "You are logged in." : "You are logged out."}</p>
      <button onClick={isAuthenticated ? logout : login}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default AuthStatus;
