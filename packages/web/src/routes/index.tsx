import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegisterConnector } from "../modules/Register/RegisterConnector";
import { LoginConnector } from "../modules/login/LoginConnector";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/register" component={RegisterConnector} />
      <Route exact={true} path="/login" component={LoginConnector} />
    </Switch>
  </Router>
);
