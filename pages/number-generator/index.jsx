import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import styles from './number-generator.module.css'

export default function Home() {
  const [number, setNumber] = useState(0)

  const generateNumber = () => {
    setNumber(Math.floor(Math.random() * (1000 - 0 + 1)) + 0)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>My random number</title>
        <meta name="description" content="rnadom number generator" />
        <meta
          name="keywords"
          content="random, number, generator, test, next, easy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.main__container}>
          <h1 className={styles.title}>
            Click here to generate a random number:
          </h1>
          <button className={styles['button--blue']} onClick={generateNumber}>
            Generate number
          </button>
          <h2>{number}</h2>
          <h2 className={styles.description}>
            Go to{' '}
            <Link href="/">
              <span className={styles['link-text']}>Home</span>
            </Link>
          </h2>
        </div>
      </main>
    </div>
  )
}
