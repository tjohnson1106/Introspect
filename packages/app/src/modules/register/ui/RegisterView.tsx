import * as React from "react";
import PureComponent = React.PureComponent;
import { View, Button } from "react-native";

import { withFormik, FormikErrors, FormikProps, Field } from "formik";

import { validUserSchema } from "@introspect/common";

import { styles } from "./RegisterViewStyles";
import InputField from "../../shared/inputField";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

export class RView extends PureComponent<FormikProps<FormValues> & Props> {
  render() {
    const { handleSubmit } = this.props;

    return (
      <View style={styles.formWrapper}>
        <Field name="email" placeholder="Email" component={InputField} />
        <Field
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          component={InputField}
        />
        <Button title="submit" onPress={handleSubmit as any} />
      </View>
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
