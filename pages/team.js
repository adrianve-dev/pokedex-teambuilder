import { useDispatch, useSelector } from 'react-redux'
import PokedexItem from '../components/PokedexItem'
import useManyPokemon from '../hooks/useManyPokemon'
import { remove } from '../redux/features/team/teamSlice'

const Team = () => {
    const team = useSelector((state) => state.team.ids)
    const dispatch = useDispatch()
    const pokemon = useManyPokemon(team)

    return (
        <div>
            <div>
                My Team
            </div>
            <div>
                Pokemon
                {pokemon.length > 0 && 
                    pokemon.map(p => {
                        return(
                            <div key={p.id}>
                                <PokedexItem key={p.id} pokemon={p} />
                                <button aria-label='Remove from Team' onClick={() => dispatch(remove(p.id))}>Remove</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Team