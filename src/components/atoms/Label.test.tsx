import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Label from '@/components/atoms/Label'

const TEXT = 'テキスト'

describe('Label.tsx', () => {
  test('コンポーネントが描画される', () => {
    render(<Label>{TEXT}</Label>)

    const label = screen.getByText(TEXT)
    expect(label).toBeInTheDocument()
  })
})
