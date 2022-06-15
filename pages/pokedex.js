import PokedexItem from '../components/PokedexItem'
import { GET_ALL_POKEMON } from '../utils/queries'
import { useQuery } from '@apollo/client'
// import client from '../utils/apollo-client'

const Pokedex = () => {
    // read from apollo cache - useQuery reads cache if already called
    // const pokemon = client.readQuery({query: GET_ALL_POKEMON, variables: {limit: 151}})
    const query = useQuery(GET_ALL_POKEMON, {variables: {limit: 151}})

    // shouldn't be true because loads at app level so never has to query server
    if(query.loading) {
        return (
            'Loading...'
        )
    }

    return (
        <div>
            <div>
                Pokedex
            </div>
            {query.data && 
                <div>
                    {query.data.allPokemon.map(p => <PokedexItem key={p.id} pokemon={p} />)}
                </div>}
        </div>
    )
}

export default Pokedex