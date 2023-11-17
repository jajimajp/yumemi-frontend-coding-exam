import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Fieldset from './Fieldset'

describe('Fieldset.tsx', () => {
  test('子要素のチェックボックスを正しく描画する', () => {
    render(
      <Fieldset>
        <input type="checkbox" />
      </Fieldset>,
    )

    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
    expect(input).toBeEnabled()
  })

  test('disabled が指定されたときに、子要素のチェックボックスが無効化される', () => {
    render(
      <Fieldset disabled>
        <input type="checkbox" />
      </Fieldset>,
    )

    const input = screen.getByRole('checkbox')
    expect(input).toBeDisabled()
  })
})
