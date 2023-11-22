import Head from 'next/head'
import PrefectureComposition from '@/components/organisms/PrefectureComposition'

export default function Home() {
  return (
    <>
      <Head>
        <title>総人口推移</title>
        <meta name="description" content="都道府県別の総人口推移グラフを表示するアプリケーション" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PrefectureComposition />
      </main>
    </>
  )
}
