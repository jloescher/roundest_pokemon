import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <Head>
        <title>Roundest Pokemon</title>
        <meta name="description" content="Vote for the roundest pokemon." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-2xl text-center'>Which Pokémon is Rounder?</div>
      <div className='p-2' />
      <div className='border rounded p-8 flex justify-between max-w-2xl items-center'>
        <div className='w-16 h-16 bg-red-200'></div>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-red-200'></div>
      </div>

    </div>
  )
}

export default Home
