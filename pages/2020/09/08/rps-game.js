import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function RPSGame() {
  return (
    <div className="container">
      <Head>
        <title>@austinfroste | RPS Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <body>
	      <div>
		      <p>Here is some info!</p>
	      </div>
      </body>
      
    </div>
  )
}