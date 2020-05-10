import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/Notfound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Data from "./containers/Data";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      {/* Finally, catch all unmatched routes */}

      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/data">
        <Data />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}
