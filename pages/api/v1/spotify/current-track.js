import { getCurrentTrack } from '@/lib/spotify'

export default async (_, res) => {
  const response = await getCurrentTrack()
  const data = await response.json()

  return res.status(200).json(data)
}
