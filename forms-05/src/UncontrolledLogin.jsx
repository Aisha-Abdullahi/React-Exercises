import React, { useEffect, useRef } from "react";

export default function UncontrolledLogin() {
  const handleLogin = (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log("Logged in as:", username);
    console.log("Your Password is:", password);
  };

  const handleReset = () => {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "200px",
      }}
    >
      <label>Username:</label>
      <input
        type="text"
        placeholder="username"
        id="username"
        ref={usernameRef}
      />
      <label>Password:</label>
      <input type="password" placeholder="password" id="password" />
      <button onClick={handleLogin} type="submit">
        Login
      </button>
      <button onClick={handleReset} type="reset">
        Reset
      </button>
    </div>
  );
}
