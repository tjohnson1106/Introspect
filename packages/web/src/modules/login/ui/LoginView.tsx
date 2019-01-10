import * as React from "react";
import PureComponent = React.PureComponent;
import {
  withFormik,
  FormikErrors,
  FormikProps,
  Field,
  Form as FeatureForm
} from "formik";
import { Form as AntForm, Icon } from "antd";

import { loginSchema } from "@introspect/common";

import { styles } from "./LoginViewStyles";
import InputField from "../../shared/inputField";
import { Link } from "react-router-dom";

const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export class LView extends PureComponent<FormikProps<FormValues> & Props> {
  render() {
    // remember to pass unique items to Field
    return (
      <FeatureForm style={styles.root}>
        <div style={styles.formWrapper}>
          <Field
            name="email"
            prefix={
              <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
            }
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            type="password"
            prefix={
              <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
            }
            placeholder="Password"
            component={InputField}
          />
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Link to="/register">Login</Link>
          </FormItem>
          <FormItem>
            Or <a href="">register now!</a>
          </FormItem>
        </div>
      </FeatureForm>
    );
  }
}

// specify default values
// remember this is server request looking for registered users

export const LoginView = withFormik<Props, FormValues>({
  validationSchema: loginSchema,
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  handleSubmit: async (values, { props, setErrors }) => {
    const errors = await props.submit(values);

    if (errors) {
      setErrors(errors);
    }
  }
})(LView);
