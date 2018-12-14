import * as React from "react";
import PureComponent = React.PureComponent;
import { withFormik } from "formik";
import { Form, Button, Input, Icon } from "antd";

import { styles } from "./RegisterViewStyles";

const FormItem = Form.Item;

export class RView extends PureComponent {
  render() {
    return (
      <div style={styles.root}>
        <div style={styles.formWrapper}>
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          </FormItem>
          <FormItem>
            <Input
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
