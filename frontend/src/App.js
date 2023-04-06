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
import ApplicationsContext from "./ApplicationsContext";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [applications, setApplications] = useState([]);
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
            setApplications(res.user.applications)
          }
          catch (e) {
            console.log(e)
          }
        }
        else {
          setUser(null);
        };
      }
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
      {user ? <p>Hello, {user.firstName}!</p> :
        <Login />}
      <UserContext.Provider value={user}>
        <ApplicationsContext.Provider value={applications}>
          <TokenContext.Provider value={token}>
            <NavBar />
            <Routes loginUser={loginUser} logoutUser={logoutUser} registerUser={registerUser} />
          </TokenContext.Provider>
        </ApplicationsContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
