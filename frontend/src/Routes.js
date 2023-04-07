import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"

import CompanyList from "./CompanyList"
import JobList from "./JobList"
import Job from "./Job"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm"
import Profile from "./Profile"
import Home from "./Home"
import Logout from "./Logout";
import CompanyDetails from "./CompanyDetails";


function Routes({ loginUser, logoutUser, registerUser }) {
    return (
        <Switch>
            <Route exact path="/companies">
                <CompanyList />
            </Route>
            <Route path="/companies/:company">
                <CompanyDetails />
            </Route>
            <Route exact path="/jobs">
                <JobList />
            </Route>
            <Route path="/jobs/:job">
                <Job />
            </Route>
            <Route path="/login">
                <LoginForm loginUser={loginUser} />
            </Route>
            <Route exact path="/signup">
                <SignupForm registerUser={registerUser} />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route exact path="/logout">
                <Logout logoutUser={logoutUser} />
            </Route>
            <Route path="/">
                <Home />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;