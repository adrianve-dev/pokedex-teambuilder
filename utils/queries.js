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

export const GET_POKEMON_BY_ID = gql`
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

export const GET_ALL_POKEMON = gql`
    query allPokemon($limit: Int) {
        allPokemon(limit: $limit) {
            sprites {
                front_default
            }
            pokedex_entries {
                description
            }
            evolves_to {
                id
                name
            }
            evolves_from {
                id
                name
            }
            types {
                name
                id
            }
            games {
                id
                name
            }    
                id
                name
            }
        }
    `