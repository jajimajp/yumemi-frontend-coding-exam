import { useState } from 'react'
import SelectButtons from '@/components/atoms/SelectButtons'

/**
 * セレクトボタンのコンポーネントと、現在選択中の値を返す Hook
 * @param name radio のグループ化に使われる
 * @param options
 * @param defaultValue
 * @returns
 */
export function useLabelSelectButtons<T extends string>(
  name: string,
  options: T[],
  defaultValue: T,
) {
  const [selected, setSelected] = useState(defaultValue)
  const onChange = (value: T) => {
    setSelected(value)
  }
  const LabelSelectButtons = () => (
    <SelectButtons name={name} options={options} selected={selected} onChange={onChange} />
  )

  return {
    selected,
    LabelSelectButtons,
  }
}
