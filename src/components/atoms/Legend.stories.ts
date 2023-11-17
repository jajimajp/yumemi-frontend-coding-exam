import type { Meta, StoryObj } from '@storybook/react'
import Legend from './Legend'

const meta = {
  title: 'Atoms/Legend',
  component: Legend,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Legend>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = { args: { children: 'テキスト' } }
