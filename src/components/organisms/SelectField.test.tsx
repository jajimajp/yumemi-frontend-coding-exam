import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import SelectField from './SelectField'

const TITLE = 'タイトル'

describe('SelectField.tsx', () => {
  test('選択肢が正しく描画される', () => {
    const options = [
      { value: 'A', label: 'A' },
      { value: 'B', label: 'B' },
      { value: 'C', label: 'C' },
    ]
    render(<SelectField title={TITLE} options={options} />)

    const element = screen.getByText(TITLE)
    expect(element).toBeInTheDocument()

    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  test('選択肢をクリックすると onChange イベントを発火する', async () => {
    const options = [
      { value: 'A', label: 'A' },
      { value: 'B', label: 'B' },
      { value: 'C', label: 'C' },
    ]
    const onChange = jest.fn()
    render(<SelectField title={TITLE} options={options} onChange={onChange} />)

    await fireEvent.click(screen.getByText('A'))
    expect(onChange).toHaveBeenCalled()
  })
})
