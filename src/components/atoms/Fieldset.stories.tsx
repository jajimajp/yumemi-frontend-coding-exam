import type { Meta, StoryObj } from '@storybook/react'
import Fieldset from './Fieldset'

const meta = {
  title: 'Atoms/Fieldset',
  component: Fieldset,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Fieldset>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <legend>some question?</legend>
        <label>
          <input type="checkbox" />
          some option
        </label>
        <label>
          <input type="checkbox" />
          another option
        </label>
      </>
    ),
  },
}
