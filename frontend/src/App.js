import React, { useState } from "react";
import Routes from "./Routes"
import './App.css';

import UserContext from "./userContext";
import NavBar from "./NavBar";
import JoblyApi from "./api";


function App() {
  const [user, setUser] = useState("");

  async function loginUser(login) {
    let token = await JoblyApi.getToken(login);
    console.log(token)
    setUser(token);
  }

  async function registerUser(login) {
    let token = await JoblyApi.register(login);
    setUser(token);
  }

  function logoutUser() {
    JoblyApi.logout();
    setUser(null);
  }

  let userToken = JoblyApi.token;

  return (
    <div className="App">
      <p>hi! {userToken}</p>
      <UserContext.Provider value={user}>
        <NavBar />
        <Routes loginUser={loginUser} logoutUser={logoutUser} registerUser={registerUser} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
