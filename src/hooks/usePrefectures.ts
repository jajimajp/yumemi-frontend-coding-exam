import { useEffect, useState } from 'react'
import { Prefecture } from '@/types/prefecture'

type Return = {
  prefectures: Prefecture[]
  isLoading: boolean
  errors: string[]
}

/**
 * 都道府県一覧データを返すフック
 */
export function usePrefectures(): Return {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    fetch('/api/prefectures').then((data) => {
      setIsLoading(true)
      fetchPrefectures()
        .then((prefectures) => setPrefectures(prefectures))
        .catch((err) => {
          setErrors([err])
        })
        .finally(() => setIsLoading(false))
    })
  }, [setPrefectures, setIsLoading, setErrors])

  return {
    prefectures,
    isLoading,
    errors,
  }
}

async function fetchPrefectures(): Promise<Prefecture[]> {
  const data = await fetch('/api/prefectures')
  const json = await data.json()
  return json
}
