import type { Meta, StoryObj } from '@storybook/react'
import SelectButtons from './SelectButtons'

const meta = {
  title: 'Atoms/SelectButtons',
  component: SelectButtons,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SelectButtons>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    name: 'fruits',
    options: ['apple', 'orange', 'grape'],
    selected: 'apple',
  },
}
