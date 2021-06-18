import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anjeon</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Hero />
    </div>
  )
}
