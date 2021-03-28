import Head from 'next/head'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

export default function Home() {
  const { data } = useSWR('/api/top-tracks', fetcher)

  return (
    <div>
      <Head>
        <title>Spotify Playground</title>
      </Head>

      <main className="min-w-screen min-h-screen">
        <div className="container mx-auto">
          <h1>Hi there!</h1>
        </div>
      </main>
    </div>
  )
}
