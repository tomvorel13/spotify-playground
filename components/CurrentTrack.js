import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

const CurrentTrack = () => {
  const { data, error } = useSWR('/api/v1/spotify/current-track', fetcher)

  console.log(data)

  if (!data) {
    return (
      <div className="min-w-min	w-1/3 p-4 border-gray-200 border rounded-md self-center flex">
        <h1 className="text-center">Loading...</h1>
      </div>
    )
  }

  if (error) {
    return <h1>Something went wrong...</h1>
  }

  if (data.isPlaying === false) {
    return (
      <div>
        <h1>OFFLINE</h1>
      </div>
    )
  }

  return (
    <>
      <h2 className="w-1/3 text-3xl self-center mb-4 text-center">🎧 Listening</h2>
      <div className="min-w-min	w-1/3 p-4 border-gray-200 border rounded-md self-center flex">
        <div className="mr-6">
          <Image
            src={data.track.images[2]?.url}
            alt="Album cover image"
            width={data.track.images[2]?.width}
            height={data.track.images[2]?.height}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="mb-2 text-lg font-bold leading-none">
            {data.track.name}
          </h3>
          <p className="mb-1">{data.track.artists}</p>
          <p className="text-sm">{data.track.album_name}</p>
        </div>
      </div>
    </>
  )
}

export default CurrentTrack
