import { useQuery } from "@apollo/client"
import { GET_SPRITE_BY_ID } from "../utils/queries"
import Image from "next/image"

const LgSquareAvatar = (props) => {
    const { pokemonId } = props
    const query = useQuery(GET_SPRITE_BY_ID, {variables: { pokemonId: pokemonId }})

    return (
        <div>
            {query.data
                ?
                    <Image
                        src={query.data.pokemon.sprites.front_default}
                        height={250}
                        width={250}
                        alt={'pokemon avatar'}
                    />
                :
                    <div style={{border: '0.75rem #eee dashed', borderRadius: '2rem', minHeight: 250, textAlign:'center'}}>
                        Add Pokemon
                    </div>
            }
        </div>
    )
}

export default LgSquareAvatar