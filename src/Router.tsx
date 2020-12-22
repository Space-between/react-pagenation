import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Search from "./pages/Search";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Search} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
