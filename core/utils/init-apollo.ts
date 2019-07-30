import {ApolloLink} from "apollo-link";
import {createHttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloClient} from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
let apolloClient = null;
const isBrowser = typeof window === 'object';
function create (initialState) {
    const httpLink = createHttpLink({
        uri: "https://api.graph.cool/simple/v1/cixmkt2ul01q00122mksg82pn",
        fetch: !isBrowser && fetch,
        headers: {
            "Access-Control-Allow-Origin" : "*"
        }
    });
    const cache = new InMemoryCache().restore(initialState || {})
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser,
        link: ApolloLink.from([httpLink]),
        cache,
    });
}

const initApollo = (initialState = {}) => {
    // Make sure to create a new client for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!isBrowser) {
        return create(initialState);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState);
    }

    return apolloClient;
};


export {initApollo};
