import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/Notfound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Data from "./containers/Data";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
  return (
    <Switch>
      <AuthenticatedRoute exact path="/">
        <Home />
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      {/* Finally, catch all unmatched routes */}

      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/data">
        <Data />
      </AuthenticatedRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
