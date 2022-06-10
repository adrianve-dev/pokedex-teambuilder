import { InMemoryCache, ApolloClient, ApolloProvider } from "@apollo/client";
import '../styles/globals.css'

const client = new ApolloClient({
  uri: 'https://dex-server.herokuapp.com/',
  cache: new InMemoryCache()
});

function PDTB({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default PDTB