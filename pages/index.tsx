import type { NextPage } from 'next'
import Head from 'next/head'

import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>BGT LAB</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          백규태 실험실
        </h1>
        <Link href='/testpage/testpage'>
          <a>테스트 페이지</a>
        </Link>
        <Link href='/debounce/debounce'>
          <a>debounce</a>
        </Link>
      </main>
    </div>
  )
}

export default Home
