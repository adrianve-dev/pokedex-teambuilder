import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import LgSquareAvatar from '../components/LgSquareAvatar'
import client from '../utils/apollo-client'
import { GET_SPRITE_BY_ID } from '../utils/queries'
import styles from '../styles/Home.module.css'

// Statically Render
export const getStaticProps = async () => {
  const POKEMON_IDS = [7, 151, 77, 134, 144, 150]
  let POKEMON_DATA = []

  for(let i = 0; i < POKEMON_IDS.length; i++) {
    const { data } = await client.query({
      query: GET_SPRITE_BY_ID, variables: {pokemonId: POKEMON_IDS[i]}
    })
    POKEMON_DATA.push(data.pokemon)
  }

  return {
    props: {
      pokemon: POKEMON_DATA
    }
  }
}

export default function Home(props) {  
  const pokemon = props.pokemon
  
  return (
    <div>
      <Head>
        <title>Pokedex Team Builder</title>
        <meta name='description' content='Pokedex Teambuilder sample Next.js app' />
      </Head>
      Pokedex Team Builder
      <div>
        <Link href={'/pokedex'}>
          <a>
            Pokedex
          </a>
        </Link>
      </div>
      <div>
        <Link href={'/team'}>
          <a>
            My Team
          </a>
        </Link>
      </div>
      <div>
        {pokemon.map(p => {
          return <LgSquareAvatar key={p.id} pokemon={p} />
        })}
      </div>
    </div>
  )
}