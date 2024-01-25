import Head from 'next/head'
import List from '@components/nhlApi/List'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Does just editing <code>pages/index.js</code> update the pod?
        </p>
        <List />
      </main>

      <Footer />
    </div>
  )
}
