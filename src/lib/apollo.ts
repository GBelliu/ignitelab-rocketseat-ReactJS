import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ogjq4s00we01xn1x7w63id/master',
  cache: new InMemoryCache()
})