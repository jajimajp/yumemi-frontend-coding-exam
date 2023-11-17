type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

/**
 * HTML `input` 要素を表すコンポーネント
 * @param props
 * @returns
 */
export default function Input(props: Props) {
  return <input {...props} />
}
