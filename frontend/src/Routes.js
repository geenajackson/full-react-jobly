import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

function Routes() {
    return (
        <div>
            <BrowserRouter>
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