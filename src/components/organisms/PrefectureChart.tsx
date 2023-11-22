import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'
import { BundledComposition, CompositionPerYearLabel } from '@/types/compositionPerYear'
import { Prefecture } from '@/types/prefecture'

type Prop = {
  label: CompositionPerYearLabel
  prefCodesToShow: Prefecture['prefCode'][]
  data: BundledComposition
}

export default function PrefectureChart({ label, prefCodesToShow, data }: Prop) {
  return (
    <LineChart width={800} height={400} data={data} margin={{ left: 80, right: 5, bottom: 50 }}>
      {prefCodesToShow.map((prefCode) => (
        <Line key={prefCode} type="monotone" dataKey={prefCode} />
      ))}
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="year" label={{ value: '年', position: 'bottom' }} />
      <YAxis label={{ value: label, angle: -90, position: 'left', offset: 50 }} />
    </LineChart>
  )
}
