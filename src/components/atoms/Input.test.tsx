import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Input from '@/components/atoms/Input'

const TEXT = 'テキスト'

describe('Input.tsx', () => {
  test('typeが未指定のとき、テキストボックスが描画される', () => {
    render(<Input />)

    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
  test('type="text" のとき、defaultValueを表示する要素が描画される', () => {
    render(<Input type="text" defaultValue={TEXT} />)

    const input = screen.getByDisplayValue(TEXT)
    expect(input).toBeInTheDocument()
  })
  test('type="checkbox" のとき、チェックボックスが描画される', () => {
    render(<Input type="checkbox" />)

    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
  })
})
