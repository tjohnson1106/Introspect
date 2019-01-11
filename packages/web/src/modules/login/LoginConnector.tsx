import * as React from "react";
import PureComponent = React.PureComponent;

import { LoginController } from "@introspect/controller";
import { LoginView } from "./ui/LoginView";

export class LoginConnector extends PureComponent {
  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
