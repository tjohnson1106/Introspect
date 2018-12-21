import * as React from "react";
import PureComponent = React.PureComponent;

import { RegisterController } from "@introspect/controller";
import { RegisterView } from "./ui/RegisterView";

export class RegisterConnector extends PureComponent {


  render() {
    return (
      <RegisterController>
        {({ submit }) => <RegisterView submit={submit} />}
      </RegisterController>
    );
  }
}
