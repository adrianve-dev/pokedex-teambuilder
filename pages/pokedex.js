import PokedexItem from '../components/PokedexItem'
import { add, remove } from '../redux/features/team/teamSlice'
import { useSelector, useDispatch } from 'react-redux'
import { GET_ALL_POKEMON } from '../utils/queries'
import { useQuery } from '@apollo/client'
// import client from '../utils/apollo-client'

const Pokedex = () => {
    // read from apollo cache - useQuery reads cache if already called
    // const pokemon = client.readQuery({query: GET_ALL_POKEMON, variables: {limit: 151}})
    const query = useQuery(GET_ALL_POKEMON, {variables: {limit: 151}})
    const team = useSelector((state) => state.team.ids)
    const dispatch = useDispatch()

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
                    {query.data.allPokemon.map(p => {
                        return (
                            <div key={p.id}>
                                <PokedexItem key={p.id} pokemon={p} />
                                <button aria-label='Add to Team' onClick={() => dispatch(add(p.id))}>Add to Team</button>
                            </div>
                            )
                    })}
                </div>}
        </div>
    )
}

export default Pokedex