import * as React from "react";
import PureComponent = React.PureComponent;
import {
  withFormik,
  FormikErrors,
  FormikProps,
  Field,
  Form as FeatureForm
} from "formik";
import { Form as AntForm, Icon, Button } from "antd";
import { Link } from "react-router-dom";

import { validUserSchema } from "@introspect/common";

import { styles } from "./RegisterViewStyles";
import { InputField } from "../../shared/inputField";

const FormItem = AntForm.Item;

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export class RView extends PureComponent<FormikProps<FormValues> & Props> {
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
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </FormItem>

          <FormItem>
            Or <Link to="/login">login now!</Link>
          </FormItem>
        </div>
      </FeatureForm>
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
