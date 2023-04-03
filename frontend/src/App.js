import React, { useState } from "react";
import Routes from "./Routes"
import './App.css';

import UserContext from "./userContext";
import TokenContext from "./tokenContext";
import Login from "./Login";
import NavBar from "./NavBar";
import JoblyApi from "./api";


function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState(null);

  async function loginUser(login) {
    try {
      let res = await JoblyApi.getToken(login);
      setToken(res);
      setUser(login);
    }
    catch (e) {
      return e;
    }

  }

  async function registerUser(login) {
    try {
      let res = await JoblyApi.register(login);
      setToken(res);
      setUser(login);
    }
    catch (e) {
      return e;
    }
  }

  function logoutUser() {
    JoblyApi.logout();
    setUser(null);
  }

  return (
    <div className="App">
      {user ? <p>Hello, {user.username}!</p> :
        <Login />}
      <UserContext.Provider value={user}>
        <TokenContext.Provider value={token}>
          <NavBar />
          <Routes loginUser={loginUser} logoutUser={logoutUser} registerUser={registerUser} />
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
