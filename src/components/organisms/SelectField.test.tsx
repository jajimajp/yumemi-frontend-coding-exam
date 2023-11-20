import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import SelectField from './SelectField'

const TITLE = 'タイトル'
const OPTIONS = [
  { value: 'A', label: 'A' },
  { value: 'B', label: 'B' },
  { value: 'C', label: 'C' },
]

describe('SelectField.tsx', () => {
  test('選択肢が正しく描画される', () => {
    render(<SelectField title={TITLE} options={OPTIONS} />)

    const element = screen.getByText(TITLE)
    expect(element).toBeInTheDocument()

    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  test('選択肢をクリックすると onChange イベントを発火する', async () => {
    const onChange = jest.fn()
    render(<SelectField title={TITLE} options={OPTIONS} onChange={onChange} />)

    await fireEvent.click(screen.getByText('A'))
    expect(onChange).toHaveBeenCalled()
  })

  test('onChange イベントでチェックを変更した選択肢がハンドラに渡される', async () => {
    const onChange = jest.fn()
    render(<SelectField title={TITLE} options={OPTIONS} onChange={onChange} />)

    // Aをチェック → Bをチェック → Aをチェック解除
    await fireEvent.click(screen.getByText('A'))
    await fireEvent.click(screen.getByText('B'))
    await fireEvent.click(screen.getByText('A'))

    expect(onChange).toHaveBeenCalledTimes(3)
    const calls = onChange.mock.calls

    expect(calls[0][0]).toHaveProperty('target', { value: 'A', label: 'A', checked: true })
    expect(calls[0][0]).toHaveProperty('selectedOptions', [{ label: 'A', value: 'A' }])

    expect(calls[1][0]).toHaveProperty('target', { value: 'B', label: 'B', checked: true })
    expect(calls[1][0]).toHaveProperty('selectedOptions', [
      { label: 'A', value: 'A' },
      { label: 'B', value: 'B' },
    ])

    expect(calls[2][0]).toHaveProperty('target', { value: 'A', label: 'A', checked: false })
    expect(calls[2][0]).toHaveProperty('selectedOptions', [{ label: 'B', value: 'B' }])
  })
})
