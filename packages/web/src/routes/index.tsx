import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RegisterConnector } from "src/modules/Register/RegisterConnector";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/register" component={RegisterConnector} />
    </Switch>
  </Router>
);
