import React from 'react'
import Image from 'next/image'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'
import Loader from '@/components/Loader'

const TopTracks = () => {
  const { data, error } = useSWR('/api/v1/spotify/top-tracks', fetcher)

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

  console.log(data, 'data')

  return (
    <div className="w-3/4 mx-auto">
      <h2 className="font-bold text-3xl uppercase mb-6">Top 10 Tracks</h2>
      {data.tracks.map((track, index) => {
        return (
          <div
            key={index}
            className="border-gray-200 border rounded-md flex flex-row h-38"
          >
            <div className="flex items-center justify-center w-32 bg-gray-400 text-6xl">
              <span>{index + 1}</span>
            </div>
            <div className="flex">
              <div className="mr-6 block">
                <Image
                  // layout="responsive"
                  src={track.images[1]?.url}
                  alt="Album cover image"
                  width={track.images[1]?.width / 2}
                  height={track.images[1]?.height / 2}
                />
              </div>
              <div className="flex flex-col p-4">
                <h3 className="mb-2 text-lg font-bold leading-none">
                  {track.title}
                </h3>
                <p className="mb-1">{track.artist}</p>
                <p className="text-sm">{track.album_name}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TopTracks
