import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pz0tp92q0201xl6xnxcvf7/master',
    cache: new InMemoryCache()
})