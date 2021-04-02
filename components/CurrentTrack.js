import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import Loader from '@/components/Loader'

const CurrentTrack = () => {
  const { data, error } = useSWR('/api/v1/spotify/current-track', fetcher)

  if (!data) {
    return <Loader />
  }

  if (error) {
    return (
      <div>
        <h1>Something went wrong...</h1>
      </div>
    )
  }

  return (
    <>
      {data.isPlaying === false ? (
        <h2 className="mt-8 w-full md:w-1/2 lg:w-1/3 text-3xl self-center mb-4 text-center">
          💤 OFFLINE
        </h2>
      ) : (
        <h2 className="mt-8 w-full md:w-1/2 lg:w-1/3 text-3xl self-center mb-4 text-center">
          <span className="animate-pulse">🎧</span> Listening
        </h2>
      )}
      {data.isPlaying !== false && (
        <div className="min-w-min w-full md:w-3/4 lg:w-1/3 p-4 border-gray-200 border rounded-md self-center flex">
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
      )}
    </>
  )
}

export default CurrentTrack
