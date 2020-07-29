import { NextApiRequest, NextApiResponse } from 'next'
import { getPlugins, Plugin } from '../../lib/plugins'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const plugins = await getPlugins()
  res.status(200).json(plugins)
}
