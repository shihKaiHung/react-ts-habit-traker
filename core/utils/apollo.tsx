import React, { Component } from 'react';
import { NextPageContext } from 'next';
import { AppContext, AppProps } from 'next/app';
import Head from 'next/head';
import { NormalizedCacheObject, ApolloClient } from 'apollo-boost';
import { getDataFromTree } from 'react-apollo';
import { IncomingMessage } from 'http';
import cookie from 'cookie';

import {initApollo} from "./init-apollo";

export type ApolloClientType = ApolloClient<NormalizedCacheObject>;


export interface NextApolloAppProps {
    apolloState?: NormalizedCacheObject;
    apolloClient: ApolloClientType;
}

const parseCookies = (req?: IncomingMessage, options = {}) => {
    return cookie.parse(
        req ? req.headers.cookie || '' : document.cookie,
        options,
    );
};
const isBrowser = typeof window === 'object';
export default (App: any) => {
    return class WithData extends Component {
        apolloClient: ApolloClientType;

        constructor(props: AppProps & NextApolloAppProps) {
            super(props);

            // `getDataFromTree` renders the component first, the client is passed off as a property.
            // After that rendering is done using Next's normal rendering pipeline
            this.apolloClient = initApollo(props.apolloState)
        }

        static displayName = 'withApollo(App)'
        static async getInitialProps (ctx) {
            const { Component, router } = ctx

            let appProps = {}
            if (App.getInitialProps) {
                appProps = await App.getInitialProps(ctx)
            }

            // Run all GraphQL queries in the component tree
            // and extract the resulting data
            const apollo = initApollo()
            if (typeof window === 'undefined') {
                try {
                    // Run all GraphQL queries
                    await getDataFromTree(
                        <App
                            {...appProps}
                            Component={Component}
                            router={router}
                            apolloClient={apollo}
                        />
                    )
                } catch (error) {
                    // Prevent Apollo Client GraphQL errors from crashing SSR.
                    // Handle them in components via the data.error prop:
                    // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                    console.error('Error while running `getDataFromTree`', error)
                }

                // getDataFromTree does not call componentWillUnmount
                // head side effect therefore need to be cleared manually
                Head.rewind()
            }

            // Extract query data from the Apollo store
            const apolloState = apollo.cache.extract()

            return {
                ...appProps,
                apolloState
            }
        }

        render () {
            return <App {...this.props} apolloClient={this.apolloClient} />
        }
    }
};
