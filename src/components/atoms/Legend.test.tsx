import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Legend from './Legend'

const TEXT = 'テキスト'

describe('Legend.tsx', () => {
  test('正しく描画される', () => {
    render(
      <fieldset>
        <Legend>{TEXT}</Legend>
      </fieldset>,
    )

    const legend = screen.getByText(TEXT)
    expect(legend).toBeInTheDocument()
  })
})
