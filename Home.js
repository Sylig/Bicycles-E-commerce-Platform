import React, { useState } from "react";
import "./Home.css";
import NavMenu from "../../components/NavBar/NavMenu";

const Home = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div className="Home" style={{ textAlign: "center" }}>
      <NavMenu />

      <div className="container mt-4">
        {isLoggedIn ? (
          <div>
            <h1 className="Welcome">Welcome, {username}.</h1>
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <input
              className="input"
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <button className="button" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
