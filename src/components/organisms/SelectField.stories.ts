import type { Meta, StoryObj } from '@storybook/react'
import SelectField from './SelectField'

const meta = {
  title: 'Organisms/SelectField',
  component: SelectField,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SelectField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '好きなくだもの',
    options: [
      { value: 'apple', label: 'りんご' },
      { value: 'orange', label: 'みかん' },
      { value: 'grape', label: 'ぶどう' },
    ],
  },
}

export const WithALotOfOptions: Story = {
  args: {
    title: '好きな文字列',
    options: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((c) => ({
      value: c,
      label: c.repeat(10),
    })),
  },
}
