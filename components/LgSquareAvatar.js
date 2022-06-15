import Image from "next/image"
import Link from "next/link"

const LgSquareAvatar = (props) => {
    const { pokemon } = props

    return (
        <div>
            {pokemon.sprites && pokemon.name
                ?
                    <Image
                        src={pokemon.sprites.front_default}
                        height={250}
                        width={250}
                        alt={pokemon.name}
                    />
                :
                    <div style={{border: '0.75rem #eee dashed', borderRadius: '2rem', minHeight: 250, textAlign:'center'}}>
                        <Link href='/pokedex'> 
                        <a>
                            Add Pokemon
                        </a>
                        </Link>
                    </div>
            }
        </div>
    )
}

export default LgSquareAvatar