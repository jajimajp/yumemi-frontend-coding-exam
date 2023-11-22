import type { Meta, StoryObj } from '@storybook/react'
import PrefectureChart from './PrefectureChart'

const meta = {
  title: 'Organisms/PrefectureChart',
  component: PrefectureChart,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PrefectureChart>

export default meta
type Story = StoryObj<typeof meta>

const prefCodesToShow = [0, 1]

const data = [
  { year: 1960, 0: 5039206, 1: 1426606 },
  { year: 1965, 0: 5171800, 1: 1416591 },
  { year: 1970, 0: 5184287, 1: 1427520 },
  { year: 1975, 0: 5338206, 1: 1468646 },
  { year: 1980, 0: 5575989, 1: 1523907 },
  { year: 1985, 0: 5679439, 1: 1524448 },
  { year: 1990, 0: 5643647, 1: 1482873 },
  { year: 1995, 0: 5692321, 1: 1481663 },
  { year: 2000, 0: 5683062, 1: 1475728 },
  { year: 2005, 0: 5627737, 1: 1436657 },
  { year: 2010, 0: 5506419, 1: 1373339 },
  { year: 2015, 0: 5381733, 1: 1308265 },
  { year: 2020, 0: 5224614, 1: 1237984 },
  { year: 2025, 0: 5016554, 1: 1157332 },
  { year: 2030, 0: 4791592, 1: 1076393 },
  { year: 2035, 0: 4546357, 1: 993737 },
  { year: 2040, 0: 4280427, 1: 908974 },
  { year: 2045, 0: 4004973, 1: 823610 },
]

export const Default: Story = {
  args: {
    label: '総人口',
    prefCodesToShow,
    data,
  },
}
