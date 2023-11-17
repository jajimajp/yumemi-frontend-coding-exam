import type { NextApiRequest, NextApiResponse } from 'next'
import { CompositionPerYear } from '@/types/compositionPerYear'

export default function handler(req: NextApiRequest, res: NextApiResponse<CompositionPerYear>) {
  const {
    query: { prefCode },
  } = req

  if (prefCode === undefined) {
    res.status(400).end('Bad request')
    return
  }

  if (!process.env.API_KEY) {
    res.status(500).end('Internal server error')
    return
  }
  fetch(
    `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}&cityCode=-`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': process.env.API_KEY,
      },
    },
  )
    .then((data) => {
      if (data.status !== 200) {
        res.status(500).end('Internal server error')
        return
      }
      data.json().then((json) => {
        if (json.statusCode && json.statusCode !== '200') {
          res.status(500).end('Internal server error')
          return
        }
        res.status(200).json(json.result)
      })
    })
    .catch(() => {
      res.status(500).end('Internal server error')
    })
}
