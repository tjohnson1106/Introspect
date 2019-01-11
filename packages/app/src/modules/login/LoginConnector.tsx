import * as React from "react";
import PureComponent = React.PureComponent;
import { LoginView } from "./ui/LoginView";
import { LoginController } from "@introspect/controller";

export class LoginConnector extends PureComponent {
  render() {
    return (
      <LoginController>
        {({ submit }) => <LoginView submit={submit} />}
      </LoginController>
    );
  }
}
