import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import anjeonLogo from '../assets/images/anjeon-logo-dark.svg'
// import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anjeon</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <img src={anjeonLogo} alt="anjeon-logo" />
        <h1>Sua empresa está adequada a LGPD?</h1>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
