import React, { useEffect, useState } from "react";
import decode from "jwt-decode"
import './App.css';

import Routes from "./Routes"
import UserContext from "./userContext";
import TokenContext from "./tokenContext";
import Login from "./Login";
import NavBar from "./NavBar";
import JoblyApi from "./api";
import useLocalStorage from "./useLocalStorage";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useLocalStorage("token");


  useEffect(
    function loadUser() {
      async function getUser() {
        setIsLoading(true);
        if (token) {
          try {
            let { username } = decode(token);
            JoblyApi.token = token;
            let res = await JoblyApi.getUser(username);
            setUser(res.user);
          }
          catch (e) {
            console.log(e)
          }
        }
        else {
          setUser(null);
        };
      }
      console.log("in useEffect")
      getUser()
      setIsLoading(false);
    }, [token]);



  async function loginUser(login) {
    try {
      let res = await JoblyApi.getToken(login);
      setToken(res.token);
      localStorage.setItem("token", res.token);
      setUser(login);
    }
    catch (e) {
      return e;
    }

  }

  async function registerUser(login) {
    try {
      let res = await JoblyApi.register(login);
      setToken(res.token);
      localStorage.setItem("token", res.token);
      setUser(login);
    }
    catch (e) {
      return e;
    }
  }

  function logoutUser() {
    JoblyApi.logout();
    localStorage.removeItem("token");
    setUser(null);
  }

  if (isLoading) {
    return <p>Loading ...</p>;
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
