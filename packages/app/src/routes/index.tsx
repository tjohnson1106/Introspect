import * as React from "react";
import {
  NativeRouter as Router,
  Route,
  Switch
} from "react-router-native";

import { RegisterConnector } from "../modules/register/RegisterConnector";

export const Routes = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/" component={RegisterConnector} />
    </Switch>
  </Router>
);
