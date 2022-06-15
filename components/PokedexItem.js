import { useQuery } from "@apollo/client"
import Image from "next/image"

const PokedexItem = (props) => {
    const { pokemon } = props

    return (
        <div>
            <div>
                {pokemon.id}
                {pokemon.name}
            </div>
            <Image 
                src={pokemon.sprites.front_default}
                height={50}
                width={50}
                alt={pokemon.name} 
            />
        </div>
    )
}

export default PokedexItem