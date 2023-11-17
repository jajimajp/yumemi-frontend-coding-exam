export type Prop = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> & {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/**
 * 見出し要素 h1~h6 を表すコンポーネント
 */
export default function Heading(props: Prop) {
  const { type, ...restProps } = props
  if (type === 'h1') {
    return <h1 {...restProps} />
  } else if (type === 'h2') {
    return <h2 {...restProps} />
  } else if (type === 'h3') {
    return <h3 {...restProps} />
  } else if (type === 'h4') {
    return <h4 {...restProps} />
  } else if (type === 'h5') {
    return <h5 {...restProps} />
  } else {
    return <h6 {...restProps} />
  }
}
