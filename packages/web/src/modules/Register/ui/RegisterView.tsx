import * as React from "react";
import PureComponent = React.PureComponent;
import { withFormik, FormikErrors, FormikProps } from "formik";
import { Form, Button, Input, Icon } from "antd";

import { styles } from "./RegisterViewStyles";

const FormItem = Form.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues>>;
}

export class RView extends PureComponent<FormikProps<FormValues> & Props> {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.formWrapper}>
          <FormItem>
            <Input
              name="email"
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          </FormItem>
          <FormItem>
            <Input
              name="password"
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          </FormItem>
          <FormItem>
            <a className="login-form-forgot" href="">
              Forgot password
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>
          <FormItem>
            Or <a href="">login now!</a>
          </FormItem>
        </div>
      </div>
    );
  }
}

// specify default values

export const RegisterView = withFormik<Props, FormValues>({
  mapPropsToValues: () => ({
    email: "",
    password: ""
  }),
  handleSubmit: async (values, { props, setErrors, setSubmitting }) => {
    const errors = await props.submit(values);
  }
})(RView);
