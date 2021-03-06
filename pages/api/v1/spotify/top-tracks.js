import { getTopTracks } from '@/lib/spotify'

export default async (_, res) => {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    images: track.album.images,
    album_name: track.album.name,
    link: track.external_urls.spotify,
  }))

  return res.status(200).json({ tracks })
}
