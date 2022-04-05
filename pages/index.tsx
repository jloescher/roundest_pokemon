import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Roundest Pokemon</title>
        <meta name="description" content="Vote for the roundest pokemon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-2xl font-semibold'>Hello World</h1>

    </div>
  )
}

export default Home
