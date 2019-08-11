import { ApolloClient, NormalizedCacheObject } from "apollo-boost";
import { AppProps } from "next/app";
import Head from "next/head";
import React, { Component } from "react";
import { getDataFromTree } from "react-apollo";
import { initApollo } from "./init-apollo";

export type ApolloClientType = ApolloClient<NormalizedCacheObject>;

export interface NextApolloAppProps {
  apolloState?: NormalizedCacheObject;
  apolloClient: ApolloClientType;
}

export default (App: any) => {
  return class WithData extends Component {
    public static displayName = "withApollo(App)";
    public static async getInitialProps(ctx) {
      const { Component, router } = ctx

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      const apollo = initApollo();
      if (typeof window === "undefined") {
        try {
          await getDataFromTree(<App {...appProps} Component={Component} router={router} apolloClient={apollo} />);
        } catch (error) {
          console.error("Error while running `getDataFromTree`", error);
        }

        Head.rewind();
      }
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }
    public apolloClient: ApolloClientType;

    constructor(props: AppProps & NextApolloAppProps) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    public render() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
