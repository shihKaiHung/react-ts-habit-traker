import React from "react";
import App, { Container } from "next/app";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { client } from "../core/utils/apollo";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
        <Container>
      <ApolloProvider client={client}>
          <Component {...pageProps} />
      </ApolloProvider>
        </Container>
    )
  }    
}

export default MyApp;