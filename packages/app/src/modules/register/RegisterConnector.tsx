import * as React from "react";
import PureComponent = React.PureComponent;
import { Button } from "react-native-elements";

export class RegisterConnector extends PureComponent {
  _onPress = () => {
    console.log("Button Pressed");
  };

  render() {
    return <Button title="BUTTON" onPress={this._onPress} />;
  }
}
