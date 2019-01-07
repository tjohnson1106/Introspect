import * as React from "react";
import { FieldProps } from "formik";
import { Form, Input } from "antd";

const FormItem = Form.Item;

// ant design example
// <div>
// <input type="text" {...field} {...props} />
// {touched[field.name] && errors[field.name] && (
//   <div className="error">{errors[field.name]}</div>
// )}
// </div>

export const InputField: React.SFC<
  FieldProps<any> & {
    prefix: React.ReactNode;
  }
> = ({ field, form: { touched, errors }, ...props }) => {
  const errorMessage = touched[field.name] && errors[field.name];
  return (
    <FormItem
      help={errorMessage}
      // an error should appear otherwise it's undefined
      validateStatus={errorMessage ? "error" : undefined}
    >
      <Input {...field} {...props} />
    </FormItem>
  );
};

export default InputField;
