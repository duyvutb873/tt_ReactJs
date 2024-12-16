import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext.tsx";
import { ThemeContext } from "../contexts/ThemeContext.tsx";
import { AuthContext } from "../contexts/AuthContext.tsx";

const Home: React.FC = () => {
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);
  const authContext = useContext(AuthContext);

  if (!userContext || !themeContext || !authContext) {
    throw new Error("Contexts must be used within their respective Providers");
  }

  const { user } = userContext;
  const { theme, setTheme } = themeContext;
  const { isAuthenticated } = authContext;

  return (
    <div>
      <h1>Welcome to the App</h1>
      <p>Current User: {user ? user.name : "Guest"}</p>
      <p>Authentication Status: {isAuthenticated ? "Logged In" : "Logged Out"}</p>
      <p>Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Home;
