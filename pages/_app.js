import { ApolloProvider, useQuery } from "@apollo/client";
import { GET_ALL_POKEMON } from '../utils/queries'
import client from '../utils/apollo-client'
import '../styles/globals.css'

function PDTB({ Component, pageProps }) {
  const query = client.query({query: GET_ALL_POKEMON, variables: {limit: 151} })

  // show app loading screen if data loading
  if(query.loading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default PDTB