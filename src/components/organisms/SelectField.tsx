import { useState } from 'react'
import Fieldset from '../atoms/Fieldset'
import Legend from '../atoms/Legend'
import CheckboxWithLabel, { CheckboxWithLabelChangeEvent } from '../molecules/CheckboxWithLabel'

type Prop = {
  // フィールドのタイトル ラベルとして表示される
  title: string
  // 選択肢
  options: SelectFieldOption[]
  onChange?: (event: SelectFieldChangeEvent) => void
}

type SelectFieldOption = {
  value: React.ComponentProps<typeof CheckboxWithLabel>['value']
  label: string
}

export type SelectFieldChangeEvent = {
  target: CheckboxWithLabelChangeEvent
  selectedOptions: SelectFieldOption[]
}

/**
 * 複数のオプションから選択を行うフィールド
 */
export default function SelectField({ title, options, onChange }: Prop) {
  const [selectedOptions, setSelectedOptions] = useState<SelectFieldOption[]>([])

  const handleChangeCheckbox: React.ComponentProps<typeof CheckboxWithLabel>['onChange'] = (
    event,
  ) => {
    const newSelectedOptions = event.checked
      ? [...selectedOptions, { value: event.value, label: event.label }] // 選択中の選択肢リストに追加
      : selectedOptions.filter((option) => option.value !== event.value) // 選択中の選択肢リストから削除

    onChange && onChange({ target: event, selectedOptions: newSelectedOptions })
    setSelectedOptions(newSelectedOptions)
  }

  return (
    <Fieldset>
      <Legend>{title}</Legend>
      {options.map((option) => {
        return (
          <CheckboxWithLabel
            key={String(option.value)}
            value={option.value}
            label={option.label}
            onChange={handleChangeCheckbox}
          />
        )
      })}
    </Fieldset>
  )
}
