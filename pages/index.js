import Head from 'next/head'
import useSWR from 'swr'

import fetcher from '../lib/fetcher'

export default function Home() {
  const { data } = useSWR('/api/top-tracks', fetcher)

  return (
    <div>
      <Head>
        <title>Spotify Playground</title>
      </Head>

      <main>
        <h1>Hi there!</h1>
      </main>
    </div>
  )
}
