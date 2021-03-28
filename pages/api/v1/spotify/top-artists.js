import { getTopArtists } from '@/lib/spotify'

export default async (_, res) => {
  const response = await getTopArtists()
  const { items } = await response.json()

  const artists = items.slice(0, 10).map((artist) => ({
    artist: artist.name,
    link: artist.external_urls.spotify,
    image: artist.images[0]?.url,
    genres: artist.genres,
  }))

  return res.status(200).json({ artists })
}
