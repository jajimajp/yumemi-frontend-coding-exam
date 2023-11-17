import type { Meta, StoryObj } from '@storybook/react'
import CheckboxWithLabel from './CheckboxWithLabel'

const meta = {
  title: 'Molecules/CheckboxWithLabel',
  component: CheckboxWithLabel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxWithLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 'value',
    label: '選択肢１',
  },
}
