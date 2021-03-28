import { getCurrentTrack } from '@/lib/spotify'

export default async (_, res) => {
  const response = await getCurrentTrack()

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const data = await response.json()

  return res.status(200).json(data)
}
