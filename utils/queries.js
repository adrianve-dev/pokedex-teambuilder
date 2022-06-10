import { gql, useQuery } from "@apollo/client"

export const GET_SPRITE_BY_ID = gql`
        query GET_POKEMON_BY_ID($pokemonId: Int!) {
            pokemon(id: $pokemonId) {
                id
                name
                sprites {
                    front_default
                }
            }
        }
    `