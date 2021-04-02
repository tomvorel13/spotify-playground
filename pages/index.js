import Head from 'next/head'

import CurrentTrack from '@/components/CurrentTrack'
import TopTracks from '@/components/TopTracks'

export default function Home() {
  return (
    <div>
      <main className="min-w-screen min-h-screen bg-gray-50 flex flex-col p-4">
        <div className="container mx-auto flex flex-col">
          <CurrentTrack />
        </div>
        <div className="container mt-24 mx-auto">
          <TopTracks />
        </div>
      </main>
    </div>
  )
}
