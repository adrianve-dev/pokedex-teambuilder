import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokedex Team Builder</title>
        <meta name='description' content='Pokedex Teambuilder sample Next.js app' />
      </Head>
      Pokedex Team Builder
      <div>
        <Link href={'./pokedex'}>
          <a>
            Pokedex
          </a>
        </Link>
      </div>
      <div>
        <Link href={'./team'}>
          <a>
            My Team
          </a>
        </Link>
      </div>
    </div>
  )
}
