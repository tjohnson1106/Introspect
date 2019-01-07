import * as React from "react";
import PureComponent = React.PureComponent;
import { ApolloProvider } from "react-apollo";

import { client } from "./apollo";
import { Routes } from "./routes";

export default class App extends PureComponent {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes />
      </ApolloProvider>
    );
  }
}
