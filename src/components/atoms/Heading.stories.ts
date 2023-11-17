import type { Meta, StoryObj } from '@storybook/react'
import Heading from './Heading'

const meta = {
  title: 'Atoms/Heading',
  component: Heading,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Heading1: Story = {
  args: {
    type: 'h1',
    children: 'テキスト',
  },
}

export const Heading2: Story = {
  args: {
    type: 'h2',
    children: 'テキスト',
  },
}

export const Heading3: Story = {
  args: {
    type: 'h3',
    children: 'テキスト',
  },
}

export const Heading4: Story = {
  args: {
    type: 'h4',
    children: 'テキスト',
  },
}

export const Heading5: Story = {
  args: {
    type: 'h5',
    children: 'テキスト',
  },
}

export const Heading6: Story = {
  args: {
    type: 'h6',
    children: 'テキスト',
  },
}
