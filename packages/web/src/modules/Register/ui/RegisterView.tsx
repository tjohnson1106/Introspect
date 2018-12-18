import * as React from "react";
import PureComponent = React.PureComponent;
import { withFormik, FormikErrors, FormikProps, Field } from "formik";
import { Form, Button, Input, Icon } from "antd";

import { validUserSchema } from "@introspect/common";

import { styles } from "./RegisterViewStyles";
import InputField from "../../shared/inputField";

const FormItem = Form.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export class RView extends PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit, touched, errors } = this.props;
    console.log("errors", errors, "errors");
    // remember to pass unique items to Field
    return (
      <form style={styles.root} onSubmit={handleSubmit}>
        <div style={styles.formWrapper}>
          <Field
            name="email"
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
            component={InputField}
          />
          <Field
            name="password"
            type="password"
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Password"
            component={InputField}
          />
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
      </form>
    );
  }
}

// specify default values

export const RegisterView = withFormik<Props, FormValues>({
  validationSchema: validUserSchema,
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
})(RView);
