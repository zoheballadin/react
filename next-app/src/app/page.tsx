import Nav from '@/components/Nav'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (

    <div>
      <Nav/>
      <Head>
        <title>News</title>
        <meta name='keywords' content='web dev, programming'/>
      </Head>
      <h1>Welcome to next</h1>
    </div>
  )
}

