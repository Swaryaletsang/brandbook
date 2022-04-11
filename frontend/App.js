import React from 'react';
//import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import Component from './component'

// const client = new ApolloClient({
//   uri:  'localhost:1337/graphql',
//   cache:  new InMemoryCache()
// })

export default function App() {
  
    return (
      //<ApolloProvider client={client}>
        <Component />
      //</ApolloProvider>
    );
}
  