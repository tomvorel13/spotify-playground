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

  console.log(data, 'data')

  return (
    <div className="w-full lg:w-3/4 mx-auto">
      <h2 className="font-bold text-3xl uppercase mb-6">Top 10 Tracks</h2>
      {data.tracks.map((track, index) => {
        return (
          <div
            key={index}
            className="border-gray-200 border rounded-md flex flex-row h-38 overflow-hidden"
          >
            <div className="bg-blue-600 text-gray-100 hidden md:flex items-center justify-center w-32 text-6xl ">
              <span>{index + 1}</span>
            </div>
            <div className="w-full flex flex-col lg:flex-row">
              <div className="mr-6 md:ml-6 lg:ml-0 block h-full w-full md:w-44">
                <Image
                  layout="responsive"
                  src={track.images[1]?.url}
                  alt="Album cover image"
                  width={track.images[1]?.width / 1.5}
                  height={track.images[1]?.height / 1.5}
                />
              </div>
              <div className="flex flex-col p-4 xl:max-w-md 2xl:max-w-full">
                <h3 className="mb-2 text-lg font-bold leading-none">
                  {track.title}
                </h3>
                <p className="mb-1">{track.artist}</p>
                <p className="text-sm mb-4">{track.album_name}</p>
                <a
                  href={track.link}
                  target="_blank"
                  className="bg-green-400 max-w-max py-2 px-6 text-sm text-gray-100 rounded-full"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TopTracks
