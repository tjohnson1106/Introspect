import * as React from "react";
import PureComponent = React.PureComponent;
import { graphql, ChildMutateProps } from "react-apollo";
import gql from "graphql-tag"
import { RegisterMutation, RegisterMutationVariables } from "./__generated__/RegisterMutation";

// no platform specific code

interface Props {
  children: (data: { submit: (values: RegisterMutationVariables) => Promise<null> }) => JSX.Element | null;
}

// specify expected types for variables
class RController extends PureComponent<ChildMutateProps<Props, RegisterMutation, RegisterMutationVariables>> {
  submit = async (values: RegisterMutationVariables) => {

    console.log("==", values, "==");
    const response = await this.props.mutate({
      variables: values
    });
  console.log("response: ", response)
    return null;
  };

  render() {
    return this.props.children({ submit: this.submit })
  }
}

const registerMutation = gql`
mutation RegisterMutation($email: String!, $password: String!) {
  register(email: $email, $password: password) {
    path
    message
  }
}
`

export const RegisterController = graphql<Props, RegisterMutation, RegisterMutationVariables>(registerMutation)(RController)
