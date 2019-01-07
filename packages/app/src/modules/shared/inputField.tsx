import * as React from "react";
import Component = React.Component;
import { Input } from "react-native-elements";
import { FieldProps } from "formik";

// ant design example
// <div>
// <input type="text" {...field} {...props} />
// {touched[field.name] && errors[field.name] && (
//   <div className="error">{errors[field.name]}</div>
// )}
// </div>

export class InputField extends Component<
  FieldProps<any> & { name: string }
> {
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
    const errorMessage = touched[field.name] && errors[field.name];
    return (
      // <FormItem
      //   help={errorMessage}
      //   // an error should appear otherwise it's undefined
      //   validateStatus={errorMessage ? "error" : undefined}
      // >
      //   <Input {...field} {...props} />
      // </FormItem>
      <Input
        placeholder=""
        errorStyle={{ color: "red" }}
        errorMessage=""
        onChangeText={this._onChangeText}
        value={field.value}
        onBlur={field.onBlur}
      />
    );
  }
}

export default InputField;
