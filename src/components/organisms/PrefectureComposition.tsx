import { useState } from 'react'
import PrefectureChart from './PrefectureChart'
import SelectField, { SelectFieldChangeEvent } from './SelectField'
import { useLabelSelectButtons } from '@/hooks/useLabelSelectButtons'
import { usePrefectureCompositions } from '@/hooks/usePrefectureCompositions'
import { usePrefectures } from '@/hooks/usePrefectures'
import { CompositionPerYearLabel } from '@/types/compositionPerYear'
import { Prefecture } from '@/types/prefecture'

/**
 * 都道府県ごと人口の選択・表示を行うコンポーネント
 */
export default function PrefectureComposition() {
  const { selected: labelToShow, LabelSelectButtons } = useLabelSelectButtons(
    'prefecture',
    ['総人口', '年少人口', '生産年齢人口', '老年人口'] as CompositionPerYearLabel[],
    '総人口',
  )
  const [prefCodesToShow, setPrefCodesToShow] = useState<Prefecture['prefCode'][]>([])

  const {
    prefectures,
    isLoading: isPrefecturesLoading,
    errors: prefectureErrors,
  } = usePrefectures()

  const { data, errors: compositionsErrors } = usePrefectureCompositions(
    prefCodesToShow,
    labelToShow,
  )

  const handleOnChange = (e: SelectFieldChangeEvent) => {
    setPrefCodesToShow(e.selectedOptions.map((option) => option.value) as Prefecture['prefCode'][])
  }

  if (isPrefecturesLoading || prefectureErrors.length > 0) {
    if (prefectureErrors.length > 0) {
      console.error(prefectureErrors)
    }
    return null
  }
  if (compositionsErrors.length > 0) {
    console.error(compositionsErrors)
  }

  const prefectureOptions = prefectures.map((prefecture) => ({
    value: prefecture.prefCode,
    label: prefecture.prefName,
  }))

  return (
    <div>
      <SelectField options={prefectureOptions} title="都道府県" onChange={handleOnChange} />
      <LabelSelectButtons />
      <PrefectureChart label={labelToShow} prefCodesToShow={prefCodesToShow} data={data} />
    </div>
  )
}
