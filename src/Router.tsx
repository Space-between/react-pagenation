import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Search from "./pages/Search";
import List from "./pages/List";
import Detail from "./pages/Detail";

export default () => (
  <Router>
    <>
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/list" component={List} />
        <Route path="/detail" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
