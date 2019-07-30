import React from "react";
import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import WithApollo, {ApolloClientType} from "../core/utils/apollo";
import {NormalizedCacheObject} from "apollo-cache-inmemory";

export interface NextApolloAppProps {
    apolloState?: NormalizedCacheObject;
    apolloClient: ApolloClientType;
}

class MyApp extends App<NextApolloAppProps> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
        <Container>
          <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
          </ApolloProvider>
        </Container>
    )
  }
}

export default WithApollo(MyApp);
