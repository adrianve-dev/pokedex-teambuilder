import { useEffect, useState } from "react"
import client from "../utils/apollo-client"
import { GET_POKEMON_BY_ID } from "../utils/queries"

/** HOOK: get data for multiple pokemon
 * 
 * @param {number[]} ids 
 * @returns Object {
                id
                name
                sprites {
                    front_default
                    __typename
                }
                __typename
            }
 */
const useManyPokemon = (ids) => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const getData = async () => {
            let data = []

            // TODO: change - currently doesn't read from cache
            // loop through ids and query
            for(let i = 0; i < ids.length; i++) {
                const result = await client.query({
                    query: GET_POKEMON_BY_ID, variables: {pokemonId: ids[i]}
                })

                data.push(result.data.pokemon)
            }

            setPokemon(data)
        }
        
        if(pokemon.length !== ids.length) {
            getData()
        }

    }, [pokemon, ids])

    return pokemon
}

export default useManyPokemon