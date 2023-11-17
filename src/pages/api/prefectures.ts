import type { NextApiRequest, NextApiResponse } from 'next'
import type { Prefecture } from '@/types/prefecture'

type Data = Prefecture[]

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  if (!process.env.API_KEY) {
    res.status(500).end('Internal server error')
    return
  }
  fetch('https://opendata.resas-portal.go.jp/api/v1/prefectures', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.API_KEY,
    },
  })
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
