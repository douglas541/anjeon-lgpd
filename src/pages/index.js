import Head from 'next/head';
import Hero from '../components/Hero';
import Info from '../components/Info';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anjeon</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Hero />
      <Info />
    </div>
  )
}
