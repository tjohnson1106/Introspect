import * as React from "react";
import PureComponent = React.PureComponent;
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag";
import { LoginMutation, LoginMutationVariables } from "../../schemaTypes";

// no platform specific code

interface Props {
  children: (
    data: { submit: (values: LoginMutationVariables) => Promise<null> }
  ) => JSX.Element | null;
}

// specify expected types for variables
class LController extends PureComponent<
  ChildMutateProps<Props, LoginMutation, LoginMutationVariables>
> {
  submit = async (values: LoginMutationVariables) => {
    console.log("==", values, "==");
    const {
      data: { login }
    } = await this.props.mutate({
      variables: values
    });
    console.log("response: ", login);
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit });
  }
}

const loginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      path
      message
    }
  }
`;

export const LoginController = graphql<
  Props,
  LoginMutation,
  LoginMutationVariables
>(loginMutation)(LController);
