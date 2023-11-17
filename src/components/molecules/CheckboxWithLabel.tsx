import Input from '../atoms/Input'
import Label from '../atoms/Label'

type Prop = {
  value: React.ComponentProps<typeof Input>['value']
  label: string
  onChange?: (event: CheckboxWithLabelChangeEvent) => void
}

type CheckboxWithLabelChangeEvent = {
  value: Prop['value']
  label: Prop['label']
  checked: boolean
}

export default function CheckboxWithLabel({ value, label, onChange }: Prop) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange &&
      onChange({
        value,
        label,
        checked: event.target.checked,
      })
  }

  return (
    <>
      <Label>
        <Input type="checkbox" value={value} onChange={handleChange} />
        {label}
      </Label>
    </>
  )
}
