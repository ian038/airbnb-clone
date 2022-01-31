import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1>
          Hello world
        </h1>
      </main>
    </div>
  )
}
