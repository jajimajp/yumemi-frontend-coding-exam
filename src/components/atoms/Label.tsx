type Prop = React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>

/**
 * HTML label 要素を表すコンポーネント
 * @param props
 * @returns
 */
export default function Label(props: Prop) {
  return <label {...props} />
}
