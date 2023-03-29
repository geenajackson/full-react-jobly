import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import CompanyList from "./CompanyList"
import Company from "./Company"
import JobList from "./JobList"
import Job from "./Job"
import Login from "./Login"
import SignupForm from "./SignupForm"
import Profile from "./Profile"
import Home from "./Home"
import NavBar from "./NavBar";


function Routes() {
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/companies">
                        <CompanyList />
                    </Route>
                    <Route path="/companies/:company">
                        <Company />
                    </Route>
                    <Route exact path="/jobs">
                        <JobList />
                    </Route>
                    <Route path="/jobs/:job">
                        <Job />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/signup">
                        <SignupForm />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default Routes;