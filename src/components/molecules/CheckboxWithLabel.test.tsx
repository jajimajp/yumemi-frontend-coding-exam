import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import CheckboxWithLabel from './CheckboxWithLabel'

const LABEL_TEXT = 'ラベル'

describe('CheckboxWithLabel.tsx', () => {
  test('ラベルが正しく描画される', () => {
    render(<CheckboxWithLabel value="value" label={LABEL_TEXT} />)

    const label = screen.getByText(LABEL_TEXT)
    expect(label).toBeInTheDocument()
  })

  test('ラベルをクリックするとチェックされる', async () => {
    render(<CheckboxWithLabel value="value" label={LABEL_TEXT} />)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toBeChecked()

    await userEvent.click(screen.getByText(LABEL_TEXT))
    expect(checkbox).toBeChecked()
  })
})
