import { getCurrentTrack } from '@/lib/spotify'

export default async (_, res) => {
  const response = await getCurrentTrack()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const { item, currently_playing_type } = await response.json()

  const track = {
    name: item.name,
    media_type: currently_playing_type,
    artists: item.artists.map((artist) => artist.name).join(', '),
    images: item.album.images,
    album_name: item.album.name,
  }

  return res.status(200).json({ track })
}
