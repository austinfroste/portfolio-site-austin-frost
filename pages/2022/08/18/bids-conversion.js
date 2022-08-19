import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function BIDSConversion() {
  return (
    <div className="container">
      <Head>
        <title>@austinfroste | BIDS Conversion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <body>
        <div>
          <h1>BIDS Conversion</h1>
          <p className="blog-post-date">18 August 2022</p>
        </div>
	      <div>
            <p>work in progress</p>
	      </div>
      </body>
      
    </div>
  )
}