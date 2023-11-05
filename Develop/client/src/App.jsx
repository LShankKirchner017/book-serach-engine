import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import './App.css';
import { Outlet } from 'react-router-dom';
import Auth from './utils/auth'

const httpLink = createHttpLink({
  url: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = Auth.getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }

})

const client = new ApolloClient ({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

import Navbar from './components/Navbar';

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider>
  );
}

export default App;
