import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import PrefectureChart from './PrefectureChart'

describe('PrefectureChart.tsx', () => {
  test('スナップショットが作成できる', async () => {
    const result = render(<PrefectureChart label="総人口" prefCodesToShow={[]} data={[]} />)
    expect(result).toMatchSnapshot()
  })
})
