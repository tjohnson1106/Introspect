import * as React from "react";
import Component = React.Component;
import { Input } from "react-native-elements";
import { FieldProps } from "formik";

const _errorStyle = {
  color: "red"
};

export class InputField extends Component<FieldProps<any>> {
  _onChangeText = (text: string) => {
    const {
      form: { setFieldValue },
      field: { name }
    } = this.props;
    // from formik
    setFieldValue(name, text);
  };

  render() {
    const {
      field,
      form: { touched, errors },
      ...props
    } = this.props;
    const _errorMessage = touched[field.name] && errors[field.name];
    return (
      <Input
        {...props}
        errorStyle={_errorStyle}
        onChangeText={this._onChangeText}
        // TODO: fix: not recognizing as string
        errorMessage={_errorMessage as any}
        value={field.value}
      />
    );
  }
}

export default InputField;
