import styles from './SelectButtons.module.css'

type Prop<T extends string> = {
  /** 選択内容を表す名前。radio のグループ化に用いられる。 */
  name: string
  options: T[]
  selected: T
  onChange?: (optionValue: T) => void
}

export default function SelectButtons<T extends string>({
  name,
  options,
  selected,
  onChange,
}: Prop<T>) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event.target.value as T)
  }

  return (
    <span className={styles.span}>
      {options.map((option) => (
        <label
          key={option}
          className={`${styles.label} ${option === selected && styles.labelChecked}`}
        >
          <input
            type="radio"
            name={name}
            checked={option === selected}
            onChange={handleChange}
            className={styles.radio}
            value={option}
          ></input>
          {option}
        </label>
      ))}
    </span>
  )
}
