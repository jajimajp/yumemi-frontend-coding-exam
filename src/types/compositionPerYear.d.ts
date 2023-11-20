/**
 * RESAS API 都道府県の人口構成のリクエスト成功時のレスポンス内容を表す型
 * API仕様: https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
 */
export type CompositionPerYear = {
  boundaryYear: number // 実績値と推計値の区切り年
  data: (
    | {
        label: '総人口'
        data: {
          year: number
          value: number // 人口
        }[]
      }
    | {
        label: Exclude<CompositionPerYearLabel, '総人口'>
        data: {
          year: number
          value: number // 人口
          rate: number
        }[]
      }
  )[]
}

export type CompositionPerYearLabel = '総人口' | '年少人口' | '生産年齢人口' | '老年人口'
