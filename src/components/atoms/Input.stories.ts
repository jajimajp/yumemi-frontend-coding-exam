import type { Meta, StoryObj } from '@storybook/react'
import Input from './Input'

const meta = {
  title: 'Atoms/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: {} }

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
  },
}
