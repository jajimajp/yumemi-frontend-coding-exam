import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Heading from '@/components/atoms/Heading'

const TEXT = 'テキスト'

describe('Heading.tsx', () => {
  test.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] satisfies React.ComponentProps<
    typeof Heading
  >['type'][])('type="%s" のとき、子要素のテキストが描画される', (type) => {
    render(<Heading type={type}>{TEXT}</Heading>)

    const heading = screen.getByText(TEXT)
    expect(heading).toBeInTheDocument()
  })
})
