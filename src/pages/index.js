import Head from 'next/head';
import anjeonLogo from '../assets/images/anjeon-logo-dark.svg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anjeon</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main>
        <img src={anjeonLogo} alt="anjeon-logo" />
        <h1>Sua empresa está adequada a LGPD?</h1>
      </main>

      <footer>
      </footer>
    </div>
  )
}
