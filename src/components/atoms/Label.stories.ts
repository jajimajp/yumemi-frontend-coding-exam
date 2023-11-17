import type { Meta, StoryObj } from '@storybook/react'
import Label from './Label'

const meta = {
  title: 'Atoms/Label',
  component: Label,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'テキスト',
  },
}
