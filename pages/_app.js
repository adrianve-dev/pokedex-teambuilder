import { ApolloProvider, useQuery } from "@apollo/client";
import { GET_ALL_POKEMON } from '../utils/queries'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
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
    <Provider store={store}>
      <ApolloProvider client={client}>
          <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  )
}

export default PDTB