import LandingLayout from '@/layouts/LandingLayout'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'

export default function Landing() {
  return (
    <>
      <Head>
        <title>Purdue IEEE</title>
        <meta name="description" content="Purdue Institute of Electrical and Electronics Engineers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Hero />
      </main>
    </>
  )
}
