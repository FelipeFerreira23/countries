import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://testefront.dev.softplan.com.br/',
  cache: new InMemoryCache(),
});