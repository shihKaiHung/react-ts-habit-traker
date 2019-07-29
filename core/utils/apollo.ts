import { ApolloClient } from 'apollo-boost';
import { createHttpLink } from "apollo-link-http";
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
const httpLink = createHttpLink({
    uri: "http://localhost:3000/graphql?"
});

const cache = new InMemoryCache()

export const client = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache,
});