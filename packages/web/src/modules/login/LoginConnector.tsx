import * as React from "react";
import PureComponent = React.PureComponent;

import { LoginView } from "./ui/LoginView";

export class LoginConnector extends PureComponent {
  dummySubmit = () => {
    console.log(values);

    return null;
  };

  render() {
    return <LoginView submit={this.dummySubmit} />;
  }
}
