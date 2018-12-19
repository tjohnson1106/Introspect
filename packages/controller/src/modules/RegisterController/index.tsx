import * as React from "react";
import PureComponent = React.PureComponent;

interface Props {
  children: (data: { submit: (values: any) => Promise<null> }) => JSX.Element | null;
}


export class RegisterController extends PureComponent<Props> {
  submit = async (values: any) => {
    console.log("==", values, "==");
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit })
  }
}
