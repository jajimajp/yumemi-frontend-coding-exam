/**
 * HTML fieldset 要素を表すコンポーネント
 * @param props
 * @returns
 */
export default function Fieldset(
  props: React.DetailedHTMLProps<
    React.FieldsetHTMLAttributes<HTMLFieldSetElement>,
    HTMLFieldSetElement
  >,
) {
  return <fieldset {...props} />
}
