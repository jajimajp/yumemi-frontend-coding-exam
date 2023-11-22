import { useEffect, useState } from 'react'
import {
  BundledComposition,
  CompositionPerYear,
  CompositionPerYearLabel,
} from '@/types/compositionPerYear'
import { Prefecture } from '@/types/prefecture'

type Return = {
  data: BundledComposition
  isLoading: boolean
  errors: string[]
}

/**
 * 指定された都道府県とラベルに対応するデータを、年ごとにまとめた Array として返す Hook
 * @param selectedPrefCodes
 * @param label
 */
export function usePrefectureCompositions(
  selectedPrefCodes: Prefecture['prefCode'][],
  label: CompositionPerYearLabel,
): Return {
  const [data, setData] = useState<Return['data']>([])
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    setIsLoading(true)
    fetchBundledComposition(selectedPrefCodes, label)
      .then((data) => setData(data))
      .catch((error) => setErrors([error]))
      .finally(() => setIsLoading(false))
  }, [selectedPrefCodes, label, setIsLoading, setErrors])

  return { data, isLoading, errors }
}

/**
 * 指定された都道府県の人口データをAPIから取得する
 * @param prefCode
 * @returns
 */
async function fetchCompositionPerYear(
  prefCode: Prefecture['prefCode'],
): Promise<CompositionPerYear> {
  const data = await fetch(`/api/compositionPerYear/${prefCode}`)
  const json = await data.json()
  return json
}

/**
 * 指定された都道府県とラベルに対応するデータを、年ごとにまとめた Array として返す
 * @param selectedPrefCodes
 * @param label
 * @returns
 */
async function fetchBundledComposition(
  selectedPrefCodes: Prefecture['prefCode'][],
  label: CompositionPerYearLabel,
) {
  // 都道府県がひとつも選択されていない場合
  if (selectedPrefCodes.length === 0) {
    return []
  }

  const compositions: CompositionPerYear['data'] = []
  for (const prefCode of selectedPrefCodes) {
    const compositionPerYear = await fetchCompositionPerYear(prefCode)
    const compositionOfLabel = compositionPerYear.data.find((d) => d.label === label)
    if (compositionOfLabel === undefined) {
      throw new Error(
        `指定されたラベル: "${label}" のデータが prefCode: ${prefCode} の都道府県データに存在しません。`,
      )
    }
    compositions.push(compositionOfLabel)
  }

  const years = compositions[0].data.map((d) => d.year)

  // 年毎に、選択した全都道府県のデータをまとめる
  return years.map((year) => {
    let resultForYear: { year: number; [key: Prefecture['prefCode']]: number } = { year }
    for (let i = 0; i < compositions.length; i++) {
      const prefCode = selectedPrefCodes[i]
      const value = compositions[i].data.find((d) => d.year === year)?.value
      if (value === undefined) {
        throw new Error(
          `prefCode: ${prefCode} , label: "${label}" の都道府県データ内に、${year} 年のデータが存在しません。`,
        )
      }
      resultForYear = { ...resultForYear, [prefCode]: value }
    }
    return resultForYear
  })
}
