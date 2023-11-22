import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import SelectButtons from '@/components/atoms/SelectButtons'

const NAME = 'person'
const OPTIONS = ['alice', 'bob', 'charlie']
const SELECTED = OPTIONS[0]

describe('SelectButtons.tsx', () => {
  test('選択肢を表示できる', () => {
    render(<SelectButtons name={NAME} options={OPTIONS} selected={SELECTED} />)

    OPTIONS.forEach((option) => {
      expect(screen.getByText(option)).toBeInTheDocument()
    })
  })

  test('selected に指定した値がチェックされている', () => {
    render(<SelectButtons name={NAME} options={OPTIONS} selected={SELECTED} />)

    expect(screen.getByLabelText(SELECTED)).toBeChecked()
  })

  test('要素のクリック時に onChange イベントを発火する', async () => {
    const onChange = jest.fn()
    render(<SelectButtons name={NAME} options={OPTIONS} selected={SELECTED} onChange={onChange} />)

    const label = OPTIONS[1]
    await fireEvent.click(screen.getByText(label))
    expect(onChange).toHaveBeenCalledWith(label)
  })
})
