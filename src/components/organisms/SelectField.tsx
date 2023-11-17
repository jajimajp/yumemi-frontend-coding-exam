import Fieldset from '../atoms/Fieldset'
import Legend from '../atoms/Legend'
import CheckboxWithLabel from '../molecules/CheckboxWithLabel'

type Prop = {
  // フィールドのタイトル ラベルとして表示される
  title: string
  // 選択肢
  options: SelectFieldOption[]
  onChange?: React.ComponentProps<typeof CheckboxWithLabel>['onChange']
}

type SelectFieldOption = {
  value: string
  label: string
}

/**
 * 複数のオプションから選択を行うフィールド
 */
export default function SelectField({ title, options, onChange }: Prop) {
  const handleChangeCheckbox: React.ComponentProps<typeof CheckboxWithLabel>['onChange'] = (
    event,
  ) => {
    onChange && onChange(event)
  }

  return (
    <Fieldset>
      <Legend>{title}</Legend>
      {options.map((option) => {
        return (
          <CheckboxWithLabel
            key={option.value}
            value={option.value}
            label={option.label}
            onChange={handleChangeCheckbox}
          />
        )
      })}
    </Fieldset>
  )
}
